import express from 'express';
import { ItemRoutes } from './routes';
import { errorHandler } from './middlewares';

const app = express();

app.use(express.json());

// Routes
app.use('/api/items', ItemRoutes);

// Global error handler (should be after routes)
app.use(errorHandler);

export default app;