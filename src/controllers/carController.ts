import { Request, Response } from 'express';
import Car from '../models/carModel';

export const getAllCars = async (req: Request, res: Response) => {
  try {
    const { searchTerm } = req.query;

    let filter = {};
    if (searchTerm) {
      filter = {
        $or: [
          { brand: { $regex: searchTerm, $options: 'i' } },
          { model: { $regex: searchTerm, $options: 'i' } },
          { category: { $regex: searchTerm, $options: 'i' } },
        ],
      };
    }

    const cars = await Car.find(filter);
    res.status(200).json({
      message: 'Cars retrieved successfully',
      status: true,
      data: cars,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Failed to retrieve cars',
      success: false,
      error: error.message,
    });
  }
};

export const getCarById = async (req: Request, res: Response) => {
  try {
    const { carId } = req.params;

    const car = await Car.findById(carId);
    if (!car) {
      return res.status(404).json({
        message: 'Car not found',
        success: false,
      });
    }

    res.status(200).json({
      message: 'Car retrieved successfully',
      status: true,
      data: car,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Failed to retrieve car',
      success: false,
      error: error.message,
    });
  }
};


export const updateCar = async (req: Request, res: Response) => {
  try {
    const { carId } = req.params;
    const updates = req.body;

    const car = await Car.findByIdAndUpdate(carId, updates, { new: true });
    if (!car) {
      return res.status(404).json({
        message: 'Car not found',
        success: false,
      });
    }

    res.status(200).json({
      message: 'Car updated successfully',
      status: true,
      data: car,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Failed to update car',
      success: false,
      error: error.message,
    });
  }
};





export const deleteCar = async (req: Request, res: Response) => {
  try {
    const carId = req.params.id;

    const deletedCar = await Car.findByIdAndDelete(carId);

    if (!deletedCar) {
      return res.status(404).json({ message: 'Car not found' });
    }

    res.status(200).json({
      message: 'Car deleted successfully',
      car: deletedCar,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Failed to delete car',
      error: error.message,
    });
  }
};

export const createCar = async (req: Request, res: Response) => {
  try {
    const carData = req.body;

    // Create a new car document
    const newCar = new Car(carData);

    // Save it to the database
    const savedCar = await newCar.save();

    // Respond with the saved car
    res.status(201).json({
      message: 'Car created successfully',
      car: savedCar,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Failed to create car',
      error: error.message,
    });
  }
};
