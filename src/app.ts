import express from 'express';
import { ItemRoutes } from './routes';
import { errorHandler } from './middlewares';
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../generated/prisma/client";

const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL || '',
})
const app = express();

const prisma = new PrismaClient({
    adapter,
});

app.use(express.json());

// Routes
app.use('/api/items', ItemRoutes); 

// Global error handler (should be after routes)
app.use(errorHandler);

export default app;