const { Router } = require('express');
const { registerUser, loginUser, forgotPassword, resetPassword, verifyEmail } = require('../controllers/user.controller');
const userRouter = Router();

userRouter.post('/register', registerUser);
userRouter.post('/login', loginUser);
userRouter.post('/forgot-password', forgotPassword);
userRouter.post('/reset-password/:token', resetPassword);
userRouter.get('/verify-email/:token', verifyEmail);

module.exports = userRouter;