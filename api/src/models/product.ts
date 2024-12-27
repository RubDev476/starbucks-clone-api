import mongoose, { Document, Model, Schema } from 'mongoose';


export interface IProduct extends Document {
    name: string;
    image: string;
    sizeOptions: Record<string, any>;
    included?: Record<string, any>;
    ingredients: string;
    category: mongoose.Types.ObjectId;
}

const ProductSchema: Schema<IProduct> = new Schema({
    name: { type: String, required: true },
    image: { type: String },
    sizeOptions: { type: Object, required: true },
    included: { type: Object },
    ingredients: { type: String, required: true },
    category: { type: Schema.Types.ObjectId, ref: 'Category', required: true }
});

export const Product: Model<IProduct> = mongoose.model<IProduct>('Product', ProductSchema);
