import express, {Express} from 'express';
import dotenv from 'dotenv';
import menuRoutes from './routes/menuRoutes';
import { setupSwagger } from './swagger';
import connectDB from './settings/db/mongoDb/connection';
import path from "path";

dotenv.config();


const app: Express = express();
const PORT = process.env.PORT || 4000;

// Configurar carpeta estática
// app.use('/menu-drinks-images', express.static(path.join(__dirname, '../public/fileStorage/menu/drinks')));


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
