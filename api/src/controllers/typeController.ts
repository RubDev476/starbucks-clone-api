import express from 'express';
import {Type} from "../models";

class TypeController {

    public async getType(req: express.Request, res: express.Response) {

        try {
            const type = await Type.findOne({title: req.params.title}).populate({
                path: 'categories',
                select: 'title products',
                populate: {
                    path: 'products',
                    select: 'name image'
                }
            });

            if (!type) {
                res.status(404).json({success: false, message: 'No se encontraron tipos con ese nombre'});
                return;
            }

            const responseType = {
                title: type?.title,
                categories: type?.categories.map((category: any) => {
                    return {
                        title: category.title,
                        products: category.products.map((product: any) => {
                            return {
                                id: product._id,
                                name: product.name,
                                image: product.image
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