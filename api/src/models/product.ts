import mongoose, { Document, Model, Schema } from 'mongoose';


export interface IProductDrink extends Document {
    _id: mongoose.Types.ObjectId;
    subCategoryId: mongoose.Types.ObjectId; // Relación con SubCategory
    name: string;
    image: string;
    sizes: Record<string, string>;
    description?: string;
}

const ProductDrinkSchema: Schema<IProductDrink> = new Schema({
    subCategoryId: { type: Schema.Types.ObjectId, ref: 'SubCategory', required: true },
    name: { type: String, required: true },
    image: { type: String, required: true },
    sizes: { type: Map, of: String, required: true },
    description: { type: String },
});

export const ProductDrink: Model<IProductDrink> = mongoose.model<IProductDrink>('ProductDrink', ProductDrinkSchema);

export interface IProductFood extends Document {
    subCategoryId: mongoose.Types.ObjectId;
    name: string;
    image: string;
    allergens?: string;
    energyContent?: { kcal: string; g: string };
}

const ProductFoodSchema: Schema<IProductFood> = new Schema({
    subCategoryId: { type: Schema.Types.ObjectId, ref: 'SubCategory', required: true },
    name: { type: String, required: true },
    image: { type: String, required: true },
    allergens: { type: String },
    energyContent: {
        kcal: { type: String },
        g: { type: String },
    },
});

export const ProductFood: Model<IProductFood> = mongoose.model<IProductFood>('ProductFood', ProductFoodSchema);

export interface IProductCoffe extends Document {
    subCategoryId: mongoose.Types.ObjectId;
    name: string;
    image: string;
    g?: number;
    description?: string;
    properties?: string[];
}

const ProductCoffeSchema: Schema<IProductCoffe> = new Schema({
    subCategoryId: { type: Schema.Types.ObjectId, ref: 'SubCategory', required: true },
    name: { type: String, required: true },
    image: { type: String, required: true },
    g: { type: Number },
    description: { type: String },
    properties: { type: [String] },
});

export const ProductCoffe: Model<IProductCoffe> = mongoose.model<IProductCoffe>('ProductCoffe', ProductCoffeSchema);