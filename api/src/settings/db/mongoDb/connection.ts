import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {

    const uri: string = `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}?retryWrites=true&w=majority`;
    try {
        await mongoose.connect(uri);
        console.log('Conectado a MongoDB');
    } catch (error) {
        console.error('Error al conectar con MongoDB:', error);
    }
};


export default connectDB;
