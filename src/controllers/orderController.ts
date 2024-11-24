import { Request, Response } from 'express';
import Car from '../models/Car';
import orderModel from '../models/orderModel';


export const createOrder = async (req: Request, res: Response) => {
  try {
    const { car: carId, quantity } = req.body;

    const car = await Car.findById(carId);
    if (!car || car.quantity < quantity) {
      return res.status(400).json({
        message: 'Insufficient stock or car not found',
        success: false,
      });
    }

    const totalPrice = car.price * quantity;
    const order = await orderModel.create({ ...req.body, totalPrice });

    car.quantity -= quantity;
    car.inStock = car.quantity > 0;
    await car.save();

    res.status(201).json({
      message: 'Order created successfully',
      success: true,
      data: order,
    });
  } catch (error) {
    res.status(400).json({ message: 'Failed to create order', success: false, error });
  }
};
