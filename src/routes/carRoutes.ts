import express from 'express';
import {
  getAllCars,
  getCarById,
  
  deleteCar,
  createCar,
 updateCar,
} from '../controllers/carController';

const router = express.Router();

router.get('/', getAllCars);
router.get('/:carId', getCarById);
router.put('/:carId', updateCar);
router.delete('/:id', deleteCar);;
router.post('/', createCar);

export default router;
