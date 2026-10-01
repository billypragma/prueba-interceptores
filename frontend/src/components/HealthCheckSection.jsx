import { useState } from 'react';
import { apiClient } from '../services/apiClient';

/**
 * COMPONENTE: HealthCheckSection
 * 
 * Propósito: Verificar que el servidor backend está funcionando
 * 
 * Tu tarea:
 * 1. Implementar checkHealth() que llama a apiClient.get('/health')
 * 2. Capturar errores (si el servidor está down)
 * 3. Mostrar estado (online/offline)
 * 4. Mostrar mensajes de error si es necesario
 * 
 * Este es un buen componente para empezar a practicar error handling
 */
export function HealthCheckSection() {
  const [status, setStatus] = useState('unknown');
  
  // TODO: Agregar estados faltantes
  // const [error, setError] = useState(null);
  // const [success, setSuccess] = useState(null);
  // const [loading, setLoading] = useState(false);

  const checkHealth = async () => {
    // TODO: Implementar
    // 1. Mostrar loading
    // 2. Llamar apiClient.get('/health')
    // 3. Mostrar éxito (status: 'online')
    // 4. Capturar error (status: 'offline')
  };

  const statusIndicator = status === 'online' ? '🟢' : status === 'offline' ? '🔴' : '⚫';

  return (
    <div className="card">
      <h2>{statusIndicator} Estado del Servidor</h2>
      
      <div style={{ marginTop: '1em' }}>
        <p><strong>Estado:</strong> <code>{status.toUpperCase()}</code></p>
        <button onClick={checkHealth}>
          Verificar Conexión
        </button>
      </div>

      {/* TODO: Mostrar errores */}
      {/* TODO: Mostrar éxito */}
    </div>
  );
}

