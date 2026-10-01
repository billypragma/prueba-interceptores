import express from 'express';
import { PaymentException } from '../exceptions/PaymentException.js';
import { AuthenticationException } from '../exceptions/AuthenticationException.js';

export const router = express.Router();

// POST /api/payments/process - Procesa un pago
router.post('/process', (req, res, next) => {
  const { amount, cardNumber, token } = req.body;

  // Validar token
  if (!token) {
    return next(new AuthenticationException('Token requerido para procesar pago'));
  }

  // Validar monto
  if (!amount || amount <= 0) {
    return next(new PaymentException('Monto de pago inválido'));
  }

  // Simular tarjeta rechazada
  if (cardNumber && cardNumber === '4111111111111111') {
    return next(new PaymentException('Tarjeta rechazada por el banco'));
  }

  // Simular fondos insuficientes
  if (amount > 5000) {
    return next(new PaymentException('Fondos insuficientes en la tarjeta'));
  }

  res.status(200).json({
    statusCode: 200,
    message: 'Pago procesado exitosamente',
    data: {
      transactionId: 'TXN-' + Date.now(),
      amount,
      status: 'completed',
      timestamp: new Date().toISOString()
    }
  });
});

// POST /api/payments/validate - Valida datos de pago
router.post('/validate', (req, res, next) => {
  const { cardNumber, expiryDate, cvv } = req.body;

  if (!cardNumber || cardNumber.length !== 16) {
    return next(new PaymentException('Número de tarjeta inválido'));
  }

  if (!expiryDate || !/^\d{2}\/\d{2}$/.test(expiryDate)) {
    return next(new PaymentException('Fecha de expiración inválida (formato MM/YY)'));
  }

  if (!cvv || cvv.length !== 3) {
    return next(new PaymentException('CVV inválido'));
  }

  res.status(200).json({
    statusCode: 200,
    message: 'Datos de pago válidos',
    data: { valid: true }
  });
});

export { router as paymentRoutes };
