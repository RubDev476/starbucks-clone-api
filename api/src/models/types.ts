import mongoose, { Schema, Document, Model } from 'mongoose';
import { Category } from './categories';


export interface IType extends Document {
    _id: String;
    categoryId: String; // Relación con Category
    title: string;
    image: string;
}

export const TypeSchema: Schema<IType> = new Schema({
    _id: { type: String, required: true },
    categoryId: { type: String, required: true },
    title: { type: String, required: true },
    image: { type: String, required: true },
});

export const Type: Model<IType> = mongoose.model<IType>('Type', TypeSchema);