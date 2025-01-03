import express from 'express';
import {Section, Product} from "../models";
import {slugify} from "../utils/tools";


class MenuController {

    public async getMenu(req: express.Request, res: express.Response) {

        try {

            const sections = await Section.find().populate({
                path: 'types', select: 'title image'
            });

            const responseSections = sections.map(section => {
                return {
                    id: section._id,
                    name: section.title,
                    slug: slugify(section.title),
                    types: section.types.map((type: any) => {
                        return {
                            id: type._id,
                            title: type.title,
                            slug: slugify(type.title),
                            image: type.image
                        };
                    })
                };
            });

            res.json({ success: true, data: responseSections });
        } catch (error) {
            console.error('Error al obtener categorías con sus tipos:', error);
            res.status(500).json({ success: false, message: 'Error al obtener los datos' });
        }
    }

    public async getProductByName(req: express.Request, res: express.Response) {
        try {
            const product = await Product.findOne({name: req.params.name});
            // res.json(product);
            const responseProduct = {
                name: product?.name,
                image: product?.image,
                sizeOptions: product?.sizeOptions,
                included: product?.included,
                ingredients: product?.ingredients
            }
            res.json({success: true, data: responseProduct});
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    }

}

export default new MenuController();