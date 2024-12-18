import mongoose, { Schema, Document, Model } from 'mongoose';
import { TypeSchema } from './types';


export interface ICategory extends Document {
    _id: String;
    name: String;
    types: mongoose.Types.ObjectId[];
}

const CategorySchema: Schema<ICategory> = new Schema({
    _id: { type: String, required: true },
    name: { type: String, required: true },
});

export const Category: Model<ICategory> = mongoose.model<ICategory>('Category', CategorySchema);
