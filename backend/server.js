import express from 'express';
import cors from 'cors';
import { errorHandler } from './middleware/errorHandler.js';
import { productRoutes } from './routes/productRoutes.js';
import { authRoutes } from './routes/authRoutes.js';
import { paymentRoutes } from './routes/paymentRoutes.js';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/payments', paymentRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'OK', message: 'Servidor funcionando correctamente' });
});

// Middleware de manejo de errores (debe ser el último)
app.use(errorHandler);

// 404 Not Found
app.use((req, res) => {
  res.status(404).json({
    statusCode: 404,
    message: 'Ruta no encontrada',
    path: req.originalUrl
  });
});

app.listen(PORT, () => {
  console.log(`✓ Servidor ejecutándose en http://localhost:${PORT}`);
  console.log(`✓ API disponible en http://localhost:${PORT}/api`);
});
