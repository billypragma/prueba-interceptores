import express from 'express';
import { AuthenticationException } from '../exceptions/AuthenticationException.js';

export const router = express.Router();

// POST /api/auth/login - Simula autenticación
router.post('/login', (req, res, next) => {
  const { username, password } = req.body;

  // Validación: credenciales incorrectas
  if (!username || !password) {
    return next(new AuthenticationException('Usuario y contraseña requeridos'));
  }

  if (username !== 'admin' || password !== 'password123') {
    return next(new AuthenticationException('Credenciales inválidas'));
  }

  res.status(200).json({
    statusCode: 200,
    message: 'Autenticación exitosa',
    data: {
      token: 'token_jwt_fake_12345',
      user: {
        id: 1,
        username: 'admin',
        email: 'admin@ecommerce.com'
      }
    }
  });
});

// GET /api/auth/validate - Valida token
router.get('/validate', (req, res, next) => {
  const token = req.headers.authorization?.replace('Bearer ', '');

  if (!token) {
    return next(new AuthenticationException('Token no proporcionado'));
  }

  if (!token.startsWith('token_jwt')) {
    return next(new AuthenticationException('Token inválido'));
  }

  res.status(200).json({
    statusCode: 200,
    message: 'Token válido',
    data: { valid: true }
  });
});

export { router as authRoutes };
