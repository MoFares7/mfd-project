
// routes/authRoutes.js
const express = require('express');
const AuthController = require('../controllers/AuthController.js');
const { authenticateToken } = require('../middleware/authMiddleware.js');

const authRouter = express.Router();

authRouter.post('/register', AuthController.register);
authRouter.post('/login', AuthController.login);
// authRouter.post('/logout', authenticateToken, AuthController.logout);

module.exports = authRouter;
