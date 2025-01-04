import express from 'express';
import {filterSizeOptions} from '../utils/tools'

import {Product} from "../models";

class ProductController {

    public async getProductByName(req: express.Request, res: express.Response) {

        if (!req.params.name) {
            res.status(400).json({success: false, message: 'Nombre del producto es requerido'});
            return;
        }

        try {
            const product = await Product.findOne({name: req.params.name});

            if (!product) {
                res.status(404).json({success: false, message: 'No se encontró el producto'});
                return;
            }

            const filteredSizeOptions = filterSizeOptions(product.sizeOptions || {});

            const responseProduct = {
                id: product?._id,
                name: product?.name,
                image: product?.image,
                sizeOptions: filteredSizeOptions,
                description: product?.description
            }

            res.json({success: true, data: responseProduct});

        } catch (error: any) {
            res.status(500).json({message: error.message});
        }

    }

    public async getProductById(req: express.Request, res: express.Response) {

        if (!req.params.id) {
            res.status(400).json({success: false, message: 'ID del producto es requerido'});
            return;
        }

        try {

            const product = await Product.findById(req.params.id);

            if (!product) {
                res.status(404).json({success: false, message: 'No se encontró el producto'});
                return;
            }

            const filteredSizeOptions = filterSizeOptions(product.sizeOptions || {});

            const responseProduct = {
                id: product?._id,
                name: product?.name,
                image: product?.image,
                sizeOptions: filteredSizeOptions,
                description: product?.description
            }

            res.json({success: true, data: responseProduct});

        } catch (error: any) {
            res.status(500).json({message: error.message});
        }
    }

}

export default new ProductController();