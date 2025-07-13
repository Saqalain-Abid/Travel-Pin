const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const User = require('../models/user.model');
const sendEmail = require('../utils/sendEmail');
require('dotenv').config();

class UserController {
  constructor() {}

  // --- Signup ---
  async registerUser(req, res) {
    try {
      const { name, email, password } = req.body;

      const existing = await User.findOne({ email });
      if (existing) return res.status(400).json({ message: 'Email already registered' });

      const hashedPassword = await bcrypt.hash(password, 10);
      const verificationToken = crypto.randomBytes(32).toString('hex');

      const newUser = await User.create({
        name,
        email,
        password: hashedPassword,
        verificationToken,
      });

      const verifyLink = `${process.env.BASE_URL}/verify-email/${verificationToken}`;

      await sendEmail(
        email,
        'Verify your email',
        `<p>Welcome ${name},</p><p>Please verify your email by clicking the link below:</p><a href="${verifyLink}">${verifyLink}</a>`
      );

      res.status(201).json({ message: 'User registered. Please check your email to verify your account.' });
    } catch (err) {
      res.status(500).json({ message: 'Registration error', error: err.message });
    }
  }

  // --- Email Verification ---
  async verifyEmail(req, res) {
    try {
      const user = await User.findOne({ verificationToken: req.params.token });
      if (!user) return res.status(400).json({ message: 'Invalid or expired token' });

      user.emailVerified = true;
      user.verificationToken = null;
      await user.save();

      res.json({ message: 'Email verified successfully' });
      console.log(`Email verified for user: ${user.email}`);
    } catch (err) {
      res.status(500).json({ message: 'Verification error', error: err.message });
    }
  }

  // --- Login with Lockout ---
  async loginUser(req, res) {
    const { email, password } = req.body;
    const MAX_ATTEMPTS = 5;

    try {
      const user = await User.findOne({ email }).select('+password');
      if (!user) return res.status(400).json({ message: 'Invalid credentials' });

      if (user.isLocked) return res.status(403).json({ message: 'Account is locked due to too many failed login attempts' });

      const isValidPassword = await bcrypt.compare(password, user.password);
      if (!isValidPassword) {
        user.loginAttempts += 1;
        if (user.loginAttempts >= MAX_ATTEMPTS) {
          user.isLocked = true;
        }
        await user.save();
        return res.status(400).json({ message: 'Invalid credentials' });
      }

      if (!user.emailVerified) {
        return res.status(403).json({ message: 'Please verify your email before logging in' });
      }

      user.loginAttempts = 0;
      user.isLocked = false;
      user.lastLogin = new Date();
      await user.save();

      const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
        expiresIn: '7d',
      });

      res.json({ token });
    } catch (err) {
      res.status(500).json({ message: 'Login error', error: err.message });
    }
  }

  // --- Forgot Password ---
  async forgotPassword(req, res) {
    const { email } = req.body;
    try {
      const user = await User.findOne({ email });
      if (!user) return res.status(400).json({ message: 'User not found' });

      const resetToken = crypto.randomBytes(32).toString('hex');
      user.resetPasswordToken = resetToken;
      user.resetPasswordExpires = Date.now() + 30 * 60 * 1000; // 30 minutes
      await user.save();

      const resetLink = `${process.env.BASE_URL}/reset-password/${resetToken}`;

      await sendEmail(
        email,
        'Password Reset Request',
        `<p>Click the link below to reset your password:</p><a href="${resetLink}">${resetLink}</a>`
      );

      res.json({ message: 'Password reset email sent' });
    } catch (err) {
      res.status(500).json({ message: 'Error sending reset email', error: err.message });
    }
  }

  // --- Reset Password ---
  async resetPassword(req, res) {
    const { token } = req.params;
    const { newPassword } = req.body;

    try {
      const user = await User.findOne({
        resetPasswordToken: token,
        resetPasswordExpires: { $gt: Date.now() },
      });
      if (!user) return res.status(400).json({ message: 'Invalid or expired token' });

      const hashed = await bcrypt.hash(newPassword, 10);
      user.password = hashed;
      user.resetPasswordToken = null;
      user.resetPasswordExpires = null;
      await user.save();

      res.json({ message: 'Password updated successfully' });
    } catch (err) {
      res.status(500).json({ message: 'Error resetting password', error: err.message });
    }
  }
}

const userController = new UserController();
module.exports = userController;