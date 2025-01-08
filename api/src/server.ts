import express, {Express} from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import menuRoutes from './routes/menuRoutes';
import { setupSwagger } from './swagger';
import connectDB from './settings/db/mongoDb/connection';


dotenv.config();


const app: Express = express();
const PORT = process.env.PORT || 4000;

// Configurar CORS TODO: Agregar dominio del front-end en producción
app.use(cors());

// Middlewares
app.use(express.json());

// Configura Swagger
setupSwagger(app);

connectDB().then(() => {
    app.use('/api', menuRoutes);

    app.listen(PORT, () => {
        console.log(`Servidor escuchando en el puerto ${PORT}`);
        console.log(`Swagger Docs en http://localhost:${PORT}/api/docs`);
    });
});
