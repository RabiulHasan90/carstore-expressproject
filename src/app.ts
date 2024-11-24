import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import carRoutes from './routes/carRoutes';
import orderRoutes from './routes/orderRoutes';
import { errorHandler } from './middlewares/errorHandler';

const app: Application = express();


// Middleware for JSON parsing
app.use(express.json());


app.use('/api/orders', orderRoutes);


// Use the car routes


// Middlewares
app.use(cors()); // Allow cross-origin requests
app.use(express.json()); // Parse JSON request bodies

// Application routes
app.use('/api/cars', carRoutes); // Car routes mounted on /api/cars

// Root route
app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to the Car STORE');
});

// Error handling middleware
app.use(errorHandler);

export default app;
