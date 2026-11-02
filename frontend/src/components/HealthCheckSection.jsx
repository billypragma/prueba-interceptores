import { useState } from 'react';
import { ErrorDisplay } from './ErrorDisplay';
import { SuccessDisplay } from './SuccessDisplay';
import { apiClient } from '../services/apiClient';

export function HealthCheckSection() {
  const [status, setStatus] = useState('unknown');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const checkHealth = async () => {
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const result = await apiClient.get('/health');
      setStatus('online');
      setSuccess({
        statusCode: result.statusCode || 200,
        message: result.message || 'Servidor funcionando correctamente',
        data: result
      });
    } catch (err) {
      setStatus('offline');
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const statusIndicator = status === 'online' ? '🟢' : status === 'offline' ? '🔴' : '⚫';

  return (
    <div className="card">
      <h2>{statusIndicator} Estado del Servidor</h2>

      <div style={{ marginTop: '1em' }}>
        <p><strong>Estado:</strong> <code>{status.toUpperCase()}</code></p>
        <button onClick={checkHealth} disabled={loading}>
          {loading ? 'Verificando...' : 'Verificar Conexión'}
        </button>
      </div>

      {error && <ErrorDisplay error={error} onClose={() => setError(null)} />}
      {success && <SuccessDisplay data={success} onClose={() => setSuccess(null)} />}
    </div>
  );
}

