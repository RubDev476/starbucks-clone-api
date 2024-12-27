import mongoose, { Schema, Document, Model } from 'mongoose';
import {ISection} from "./section";


export interface IType extends Document {
    title: string;
    image: string;
    section: mongoose.Types.ObjectId;
    categories: mongoose.Types.ObjectId[];

}

export const TypeSchema: Schema<IType> = new Schema({
    title: { type: String, required: true },
    image: { type: String },
    section: { type: Schema.Types.ObjectId, ref: 'Section', required: true },
    categories: [{ type: Schema.Types.ObjectId, ref: 'Category' }],

});

export const Type: Model<IType> = mongoose.model<IType>('Type', TypeSchema);