import mongoose, { Schema, Document, Model } from 'mongoose';


export interface ISection extends Document {
    title: string;
    image: string;
    types: mongoose.Types.ObjectId[];
}

const SectionSchema: Schema<ISection> = new Schema({
    title: { type: String, required: true },
    image: { type: String },
    types: [{ type: Schema.Types.ObjectId, ref: 'Type' }],
});

export const Section: Model<ISection> = mongoose.model<ISection>('Section', SectionSchema);
