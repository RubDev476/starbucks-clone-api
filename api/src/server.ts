import express, {Express, Request, Response} from 'express';
import dotenv from 'dotenv';
import menuRoutes from './routes/menuRoutes';
import { setupSwagger } from './swagger';

dotenv.config();


const app: Express = express();
const PORT = process.env.PORT || 4000;

// Middlewares
app.use(express.json());

// Configura Swagger
setupSwagger(app);

// Rutas
app.use('/api/menu', menuRoutes);

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`API running at http://localhost:${PORT}`);
    console.log(`Swagger Docs en http://localhost:${PORT}/api/docs`);
});
