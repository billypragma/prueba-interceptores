import { useState } from 'react';
import { apiClient } from '../services/apiClient';

/**
 * COMPONENTE: PaymentSection
 * 
 * Tu tarea:
 * 1. Crear estados para: amount, cardNumber, expiryDate, cvv, loading, error, success
 * 2. Crear función handleValidateCard para validar datos
 * 3. Crear función handleProcessPayment para procesar el pago
 * 4. Capturar errores 402 (Payment Required)
 * 5. Mostrar mensajes de error y éxito
 * 
 * Errores esperados:
 * - 401: Sin autenticación / token inválido
 * - 402: Tarjeta rechazada, fondos insuficientes, datos inválidos
 * - 200: Pago procesado exitosamente
 * 
 * Nota: Los datos de prueba deben venir de tokens obtenidos en login
 */
export function PaymentSection() {
  const [amount, setAmount] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  
  // TODO: Agregar estados faltantes
  // const [error, setError] = useState(null);
  // const [success, setSuccess] = useState(null);
  // const [loading, setLoading] = useState(false);

  const handleValidateCard = async (e) => {
    e.preventDefault();
    
    // TODO: Implementar
    // 1. Mostrar loading
    // 2. Llamar apiClient.post('/payments/validate', {...})
    // 3. Mostrar éxito si es válido
    // 4. Capturar error 402 si es inválido
  };

  const handleProcessPayment = async (e) => {
    e.preventDefault();
    
    // TODO: Implementar
    // 1. Obtener token de localStorage
    // 2. Validar que tengamos token (si no, error 401)
    // 3. Mostrar loading
    // 4. Llamar apiClient.post('/payments/process', {...})
    // 5. Mostrar éxito o error
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
          />
        </div>
        <div>
          <label>Fecha de Expiración:</label>
          <input
            type="text"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            placeholder="MM/YY"
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
          />
        </div>
        <button type="submit">
          Validar Datos
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
          />
        </div>
        <button type="submit">
          Procesar Pago
        </button>
        <small style={{ display: 'block', marginTop: '0.5em', color: '#888' }}>
          Nota: Requiere autenticación (login primero)
        </small>
      </form>

      {/* TODO: Mostrar errores */}
      {/* TODO: Mostrar éxito */}
    </div>
  );
}

