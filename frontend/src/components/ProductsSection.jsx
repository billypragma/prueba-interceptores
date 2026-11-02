// ProductsSection.jsx

import { useEffect, useState } from 'react';
import { ErrorDisplay } from './ErrorDisplay';
import { SuccessDisplay } from './SuccessDisplay';
import { apiClient } from '../services/apiClient';



/**
 * COMPONENTE: ProductsSection
 * 
 * Tu tarea:
 * 1. Crear estados para: productId, loading, error, success, products
 * 2. Crear función handleGetProducts que llama a apiClient.get('/products')
 * 3. Crear función handleGetProduct que llama a apiClient.get(`/products/${id}`)
 * 4. Capturar errores (código 404 cuando producto no existe)
 * 5. Mostrar lista de productos
 * 6. Mostrar errores cuando sea necesario
 * 
 * Errores esperados:
 * - 404: Producto no existe (error del cliente)
 * - 200: Producto encontrado (éxito)
 * 
 * Estructura del error 404:
 * {
 *   statusCode: 404,
 *   errorFamily: "4xx - Client Error",
 *   name: "ProductNotFoundException",
 *   message: "Producto con ID XXX no encontrado"
 * }
 */
export function ProductsSection() {
  const [products, setProducts] = useState([]);
  const [productId, setProductId] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const fetchProducts = async () => {
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const result = await apiClient.get('/products');
      setProducts(result.data || []);
      setSuccess({
        statusCode: result.statusCode || 200,
        message: result.message || 'Productos cargados correctamente',
        data: result.data || []
      });
    } catch (err) {
      setProducts([]);
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleGetProducts = async () => {
    await fetchProducts();
  };

  const handleGetProduct = async (e) => {
    e.preventDefault();

    if (!productId.trim()) {
      setError({
        statusCode: 400,
        errorFamily: '4xx - Client Error',
        name: 'ValidationError',
        message: 'Debes ingresar un ID de producto.',
        timestamp: new Date().toISOString()
      });
      return;
    }

    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const result = await apiClient.get(`/products/${productId}`);
      setProducts([result.data]);
      setSuccess({
        statusCode: result.statusCode || 200,
        message: result.message || `Producto ${productId} encontrado`,
        data: result.data
      });
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const handleCheckStock = async (id) => {
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const result = await apiClient.get(`/products/${id}/check-stock`);
      setSuccess({
        statusCode: result.statusCode || 200,
        message: result.message || 'Estado de stock consultado',
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
      <h2>📦 Productos</h2>

      <div>
        <button onClick={handleGetProducts} disabled={loading}>
          {loading ? 'Cargando...' : 'Listar Todos'}
        </button>
      </div>

      <form onSubmit={handleGetProduct} style={{ marginTop: '1em' }}>
        <input
          type="number"
          value={productId}
          onChange={(e) => setProductId(e.target.value)}
          placeholder="ID del producto"
          min="1"
          disabled={loading}
        />
        <button type="submit" disabled={loading}>
          Buscar por ID
        </button>
      </form>

      {error && <ErrorDisplay error={error} onClose={() => setError(null)} />}
      {success && <SuccessDisplay data={success} onClose={() => setSuccess(null)} />}

      {products.length > 0 && (
        <table style={{ width: '100%', marginTop: '1rem', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ textAlign: 'left', padding: '0.5rem', borderBottom: '1px solid #444' }}>ID</th>
              <th style={{ textAlign: 'left', padding: '0.5rem', borderBottom: '1px solid #444' }}>Nombre</th>
              <th style={{ textAlign: 'left', padding: '0.5rem', borderBottom: '1px solid #444' }}>Precio</th>
              <th style={{ textAlign: 'left', padding: '0.5rem', borderBottom: '1px solid #444' }}>Stock</th>
              <th style={{ textAlign: 'left', padding: '0.5rem', borderBottom: '1px solid #444' }}>Acción</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td style={{ padding: '0.5rem', borderBottom: '1px solid #2a2a2a' }}>{product.id}</td>
                <td style={{ padding: '0.5rem', borderBottom: '1px solid #2a2a2a' }}>{product.name}</td>
                <td style={{ padding: '0.5rem', borderBottom: '1px solid #2a2a2a' }}>${Number(product.price).toFixed(2)}</td>
                <td style={{ padding: '0.5rem', borderBottom: '1px solid #2a2a2a' }}>{product.stock}</td>
                <td style={{ padding: '0.5rem', borderBottom: '1px solid #2a2a2a' }}>
                  <button type="button" onClick={() => handleCheckStock(product.id)} disabled={loading}>
                    Ver stock
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

