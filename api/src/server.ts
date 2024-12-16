import express, {Express, Request, Response} from 'express';
import dotenv from 'dotenv';
import menuRoutes from './routes/menuRoutes';

dotenv.config();


const app: Express = express();
const PORT = process.env.PORT || 4000;

// Middlewares
app.use(express.json());

// Rutas
app.use('/api/menu', menuRoutes);

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`API running at http://localhost:${PORT}`);
});
