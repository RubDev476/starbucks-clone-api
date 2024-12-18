import express from 'express';
import { Category } from "../models/categories";
import { Type } from '../models/types';


class CategoryController {

    public async getMenu(req: express.Request, res: express.Response) {

        try {
            // Obtener categorías y tipos de la base de datos
            const categories = await Category.find();
            const types = await Type.find();

            // Validar que categoryId y _id existen como cadenas UUID
            const response = categories.map(category => ({
                _id: category._id,
                name: category.name,
                types: types.filter(type =>
                    type.categoryId &&
                    type.categoryId === category._id
                )
            }));

            res.json({ success: true, data: response });
        } catch (error) {
            console.error('Error al obtener categorías con sus tipos:', error);
            res.status(500).json({ success: false, message: 'Error al obtener los datos' });
        }
    }

    public async getCategories(req: express.Request, res: express.Response) {
        try {
            const categories = await Category.find();

            res.json(categories);
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    }

    public async getCategoryById(req: express.Request, res: express.Response) {
        try {
            const category = await Category.findById(req.params.id);
            res.json(category);
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    }

}

export default new CategoryController();