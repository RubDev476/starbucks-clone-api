import express from 'express';
import {Type} from "../models";
import {deslugify} from "../utils/tools";

class TypeController {

    public async getType(req: express.Request, res: express.Response) {

        try {
            const type = await Type.findOne({title: req.params.title}).populate({
                path: 'categories',
                select: 'title products',
                populate: {
                    path: 'products',
                    select: 'name imageSmall'
                }
            });

            if (!type) {
                res.status(404).json({success: false, message: 'No se encontraron tipos con ese nombre'});
                return;
            }

            const responseType = {
                id: type._id,
                title: type?.title,
                categories: type?.categories.map((category: any) => {
                    return {
                        id: category._id,
                        title: category.title,
                        products: category.products.map((product: any) => {
                            return {
                                id: product._id,
                                name: product.name,
                                imageSmall: product.imageSmall
                            };
                        })
                    };
                })
            }

            res.json({success: true, data: responseType});

        }
        catch (error: any) {
            res.status(500).json({ success: false, message: 'Error al obtener los datos' });
        }

    }

    public async getTypeBySlug(req: express.Request, res: express.Response) {

        try {
            const type = await Type.findOne({title: deslugify(req.params.slug)}).populate({
                path: 'categories',
                select: 'title products',
                populate: {
                    path: 'products',
                    select: 'name imageSmall'
                }
            });

            if (!type) {
                res.status(404).json({success: false, message: 'No se encontraron tipos con ese nombre'});
                return;
            }

            const responseType = {
                id: type._id,
                title: type?.title,
                categories: type?.categories.map((category: any) => {
                    return {
                        id: category._id,
                        title: category.title,
                        products: category.products.map((product: any) => {
                            return {
                                id: product._id,
                                name: product.name,
                                imageSmall: product.imageSmall
                            };
                        })
                    };
                })
            }

            res.json({success: true, data: responseType});

        }
        catch (error: any) {
            res.status(500).json({ success: false, message: 'Error al obtener los datos' });
        }

    }

    public async getTypeById(req: express.Request, res: express.Response) {

        try {
            const type = await Type.findById(req.params.id).populate({
                path: 'categories',
                select: 'title products',
                populate: {
                    path: 'products',
                    select: 'name imageSmall'
                }
            });

            if (!type) {
                res.status(404).json({success: false, message: 'No se encontraron tipos con ese nombre'});
                return;
            }

            const responseType = {
                id: type._id,
                title: type?.title,
                categories: type?.categories.map((category: any) => {
                    return {
                        id: category._id,
                        title: category.title,
                        products: category.products.map((product: any) => {
                            return {
                                id: product._id,
                                name: product.name,
                                imageSmall: product.imageSmall
                            };
                        })
                    };
                })
            }

            res.json({success: true, data: responseType});

        }
        catch (error: any) {
            res.status(500).json({ success: false, message: 'Error al obtener los datos' });
        }

    }


}

export default new TypeController();