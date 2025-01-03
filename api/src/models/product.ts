import mongoose, { Document, Model, Schema } from 'mongoose';


export interface IProduct extends Document {
    name: string;
    image: string;
    imageSmall: string;
    sizeOptions?: Record<string, any>;
    included?: Record<string, any>;
    description?: string;
    allergens?: string[];
    ingredients?: string;
    category: mongoose.Types.ObjectId;
}

const ProductSchema: Schema<IProduct> = new Schema({
    name: { type: String, required: true },
    image: { type: String },
    imageSmall: { type: String },
    sizeOptions: { type: Object, default: {} },
    included: { type: Object, default: {} },
    description: { type: String, default: '' },
    allergens: { type: [String], default: [] },
    ingredients: { type: String, default: '' },
    category: { type: Schema.Types.ObjectId, ref: 'Category', required: true }
});

export const Product: Model<IProduct> = mongoose.model<IProduct>('Product', ProductSchema);
