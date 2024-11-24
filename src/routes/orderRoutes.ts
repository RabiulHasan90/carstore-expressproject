import express from 'express';
import { createOrder } from '../controllers/orderController';

const router = express.Router();

// Create an order
router.post('/', createOrder);

export default router;
