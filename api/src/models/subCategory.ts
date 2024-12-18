import mongoose, { Schema, Document, Model } from 'mongoose';


export interface ISubCategory extends Document {
    _id: mongoose.Types.ObjectId;
    typeId: mongoose.Types.ObjectId;
    title: string;
}

const SubCategorySchema: Schema<ISubCategory> = new Schema({
    typeId: { type: Schema.Types.ObjectId, ref: 'Type', required: true },
    title: { type: String, required: true },
});

export const SubCategory: Model<ISubCategory> = mongoose.model<ISubCategory>('SubCategory', SubCategorySchema);