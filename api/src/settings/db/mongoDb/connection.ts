import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {

    //const uri: string = `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}?retryWrites=true&w=majority`;
    const uri = process.env.MONGODB_URL;
    if (!uri) {
        console.error('No se ha definido la variable de entorno MONGODB_URL');
        return;
    }

    try {
        await mongoose.connect(uri);
        console.log('Conectado a MongoDB');
    } catch (error) {
        console.error('Error al conectar con MongoDB:', error);
    }
};


export default connectDB;
