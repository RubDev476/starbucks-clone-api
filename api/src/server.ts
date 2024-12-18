import express, {Express} from 'express';
import dotenv from 'dotenv';
import categoryRoutes from './routes/categoryRoutes';
import { setupSwagger } from './swagger';
import connectDB from './settings/db/mongoDb/connection';

dotenv.config();


const app: Express = express();
const PORT = process.env.PORT || 4000;

// Middlewares
app.use(express.json());

// Configura Swagger
setupSwagger(app);

connectDB().then(() => {
    app.use('/api', categoryRoutes);

    app.listen(PORT, () => {
        console.log(`Servidor escuchando en el puerto ${PORT}`);
        console.log(`Swagger Docs en http://localhost:${PORT}/api/docs`);
    });
});
