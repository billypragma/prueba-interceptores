import { useState } from 'react';
import { ErrorDisplay } from './ErrorDisplay';
import { SuccessDisplay } from './SuccessDisplay';
import { apiClient } from '../services/apiClient';

export function PaymentSection() {
  const [amount, setAmount] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleValidateCard = async (e) => {
    e.preventDefault();

    if (!cardNumber.trim() || !expiryDate.trim() || !cvv.trim()) {
      setError({
        statusCode: 400,
        errorFamily: '4xx - Client Error',
        name: 'ValidationError',
        message: 'Debes completar número, expiración y CVV.',
        timestamp: new Date().toISOString()
      });
      return;
    }

    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const result = await apiClient.post('/payments/validate', {
        cardNumber,
        expiryDate,
        cvv
      });

      setSuccess({
        statusCode: result.statusCode || 200,
        message: result.message || 'Datos de tarjeta válidos',
        data: result.data
      });
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const handleProcessPayment = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem('auth_token');

    if (!token) {
      setError({
        statusCode: 401,
        errorFamily: '4xx - Client Error',
        name: 'AuthenticationException',
        message: 'Necesitas iniciar sesión antes de procesar un pago.',
        timestamp: new Date().toISOString()
      });
      return;
    }

    if (!amount || Number(amount) <= 0) {
      setError({
        statusCode: 402,
        errorFamily: '4xx - Client Error',
        name: 'PaymentException',
        message: 'El monto del pago debe ser mayor a cero.',
        timestamp: new Date().toISOString()
      });
      return;
    }

    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const result = await apiClient.post('/payments/process', {
        amount: Number(amount),
        cardNumber,
        expiryDate,
        cvv,
        token
      });

      setSuccess({
        statusCode: result.statusCode || 200,
        message: result.message || 'Pago procesado exitosamente',
        data: result.data
      });
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card">
      <h2>💳 Pagos</h2>

      <form onSubmit={handleValidateCard}>
        <h3>Validar Tarjeta</h3>
        <div>
          <label>Número de Tarjeta:</label>
          <input
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            placeholder="16 dígitos"
            maxLength="16"
            disabled={loading}
          />
        </div>
        <div>
          <label>Fecha de Expiración:</label>
          <input
            type="text"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            placeholder="MM/YY"
            disabled={loading}
          />
        </div>
        <div>
          <label>CVV:</label>
          <input
            type="text"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            placeholder="3 dígitos"
            maxLength="3"
            disabled={loading}
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Procesando...' : 'Validar Datos'}
        </button>
      </form>

      <form onSubmit={handleProcessPayment} style={{ marginTop: '1.5em' }}>
        <h3>Procesar Pago</h3>
        <div>
          <label>Monto ($):</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Monto"
            step="0.01"
            min="0"
            disabled={loading}
          />
        </div>
        <button type="submit" disabled={loading}>
          Procesar Pago
        </button>
        <small style={{ display: 'block', marginTop: '0.5em', color: '#888' }}>
          Nota: Requiere autenticación (login primero)
        </small>
      </form>

      {error && <ErrorDisplay error={error} onClose={() => setError(null)} />}
      {success && <SuccessDisplay data={success} onClose={() => setSuccess(null)} />}
    </div>
  );
}

