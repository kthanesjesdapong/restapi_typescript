import mongoose from 'mongoose';
import { customAlphabet } from 'nanoid';
import { User } from './user.models';

const nanoid = customAlphabet('abcdefghijklmnopqrstuvwxyz0123456789');

//Interface for our Product Document
export interface Product extends mongoose.Document {
    user: User['_id'];
    title: string;
    description: string;
    price: number;
    image: string;
    createdAt: Date;
    updatedAt: Date;
}

//Schema for our Model
//nanoId generates the productId for us
const productSchema = new mongoose.Schema(
    {
        productId: { type: String, required: true, unique: true, default: () => `product_${nanoid()}` },
        user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        description: { type: String, required: true },
        price: { type: Number, required: true },
        image: { type: String, required: true }
    },
    {
        timestamps: true
    }
);


const ProductModel = mongoose.model<Product>("Product", productSchema);

export default ProductModel;