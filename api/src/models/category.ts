import mongoose, { Schema, Document, Model } from 'mongoose';


export interface ICategory extends Document {
    title: String;
    type: mongoose.Types.ObjectId;
    products: mongoose.Types.ObjectId[];
}

const CategorySchema: Schema<ICategory> = new Schema({
    title: { type: String, required: true },
    type: { type: Schema.Types.ObjectId, ref: 'Type', required: true },
    products: [{ type: Schema.Types.ObjectId, ref: 'Product' }],
});

export const Category: Model<ICategory> = mongoose.model<ICategory>('Category', CategorySchema);
