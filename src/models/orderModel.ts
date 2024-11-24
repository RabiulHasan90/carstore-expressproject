import mongoose, { Schema, Document } from 'mongoose';

interface IOrder extends Document {
  email: string;
  car: mongoose.Schema.Types.ObjectId;
  quantity: number;
  totalPrice: number;
}

const OrderSchema: Schema = new Schema(
  {
    email: { type: String, required: true, match: /.+\@.+\..+/ },
    car: { type: mongoose.Schema.Types.ObjectId, ref: 'Car', required: true },
    quantity: { type: Number, required: true, min: 1 },
    totalPrice: { type: Number, required: true, min: 0 },
  },
  { timestamps: true }
);

export default mongoose.model<IOrder>('Order', OrderSchema);
