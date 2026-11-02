import { useState } from 'react';
import { ErrorDisplay } from './ErrorDisplay';
import { SuccessDisplay } from './SuccessDisplay';
import { apiClient } from '../services/apiClient';

export function LoginSection() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!username.trim() || !password.trim()) {
      setError({
        statusCode: 400,
        errorFamily: '4xx - Client Error',
        name: 'ValidationError',
        message: 'Usuario y contraseña son requeridos.',
        timestamp: new Date().toISOString()
      });
      setSuccess(null);
      return;
    }

    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const result = await apiClient.post('/auth/login', {
        username,
        password
      });

      localStorage.setItem('auth_token', result.data.token);
      setSuccess({
        statusCode: result.statusCode || 200,
        message: result.message || 'Autenticación exitosa',
        data: result.data
      });
      setPassword('');
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card">
      <h2>🔐 Autenticación</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Usuario:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Usuario"
            disabled={loading}
          />
        </div>
        <div>
          <label>Contraseña:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Contraseña"
            disabled={loading}
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Iniciando...' : 'Iniciar Sesión'}
        </button>
        <small style={{ display: 'block', marginTop: '0.5em', color: '#888' }}>
          Prueba: admin / password123
        </small>
      </form>

      {error && <ErrorDisplay error={error} onClose={() => setError(null)} />}
      {success && <SuccessDisplay data={success} onClose={() => setSuccess(null)} />}
    </div>
  );
}

