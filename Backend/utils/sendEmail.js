const nodemailer = require('nodemailer');
require('dotenv').config();

/**
 * Send an email using Nodemailer
 * @param {string} to - Recipient email
 * @param {string} subject - Email subject
 * @param {string} html - Email body (HTML content)
 */
async function sendEmail(to, subject, html) {
  try {
    // Create transporter using SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST, // e.g., smtp.gmail.com
      port: process.env.EMAIL_PORT, // e.g., 587 for TLS or 465 for SSL
      secure: process.env.EMAIL_SECURE === 'true', // true for port 465
      auth: {
        user: process.env.EMAIL_USER, // Your email address
        pass: process.env.EMAIL_PASS  // Your email password or app-specific password
      }
    });

    // Send email
    const info = await transporter.sendMail({
      from: `"${process.env.EMAIL_FROM_NAME}" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      html
    });

    console.log(`✅ Email sent to ${to}`);
  } catch (error) {
    console.error(`❌ Email failed: ${error.message}`);
    throw new Error('Failed to send email');
  }
}

module.exports = sendEmail;