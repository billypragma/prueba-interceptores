import { useState } from 'react';
import { apiClient } from '../services/apiClient';

/**
 * COMPONENTE: LoginSection
 * 
 * Tu tarea:
 * 1. Crear estados para: username, password, loading, error, success
 * 2. Crear función handleLogin que llama a apiClient.post('/auth/login', {...})
 * 3. Capturar errores en try/catch
 * 4. Mostrar errores al usuario (crear componente ErrorDisplay)
 * 5. Mostrar éxito (crear componente SuccessDisplay)
 * 
 * Recuerda:
 * - 401: Credenciales inválidas (error del cliente)
 * - 200: Login exitoso (éxito)
 * 
 * Estructura esperada del error:
 * {
 *   statusCode: 401,
 *   errorFamily: "4xx - Client Error",
 *   name: "AuthenticationException",
 *   message: "Credenciales inválidas"
 * }
 */
export function LoginSection() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  // TODO: Agregaestados faltantes
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);
  // const [success, setSuccess] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    
    // TODO: Implementar lógica de login
    // 1. Validar inputs
    // 2. Mostrar loading
    // 3. Llamar a apiClient.post()
    // 4. En caso de éxito: guardar token, mostrar success
    // 5. En caso de error: capturar y mostrar error
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
          />
        </div>
        <div>
          <label>Contraseña:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Contraseña"
          />
        </div>
        <button type="submit">
          Iniciar Sesión
        </button>
        <small style={{ display: 'block', marginTop: '0.5em', color: '#888' }}>
          Prueba: admin / password123
        </small>
      </form>

      {/* TODO: Mostrar error aquí (crear componente ErrorDisplay) */}
      {/* TODO: Mostrar éxito aquí (crear componente SuccessDisplay) */}
    </div>
  );
}

