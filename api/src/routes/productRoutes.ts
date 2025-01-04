import { Router } from 'express';

import ProductController from '../controllers/productController';


const router = Router();

// GET /api/menu/product/id/{id}
/**
 * @openapi
 * /api/menu/product/id/{id}:
 *  get:
 *    summary: Busca un producto por su ID.
 *    parameters:
 *      - name: id
 *        in: path
 *        required: true
 *        description: ID del producto a buscar.
 *        schema:
 *          type: string
 *          example: "6773411f79161d22bd0c69dc"
 *    responses:
 *      200:
 *        description: Detalle del producto encontrado.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                success:
 *                  type: boolean
 *                  example: true
 *                data:
 *                  type: object
 *                  properties:
 *                    id:
 *                      type: string
 *                      example: 6773411f79161d22bd0c69dc
 *                    name:
 *                      type: string
 *                      example: "Caramel Brulée Latte"
 *                    image:
 *                      type: string
 *                      example: ""
 *                    sizeOptions:
 *                      type: object
 *                      additionalProperties:
 *                        type: object
 *                        properties:
 *                          content:
 *                            type: string
 *                            example: "8 fl oz"
 *                      example:
 *                        short:
 *                          content: "8 fl oz"
 *                        tall:
 *                          content: "12 fl oz"
 *                        grande:
 *                          content: "16 fl oz"
 *                        venti:
 *                          content: "20 fl oz"
 *                    description:
 *                      type: string
 *                      example: "Our signature espresso, steamed milk and rich caramel brulée sauce finished with whipped cream and a supreme topping of even more caramel brulée bits."
 *      400:
 *        description: ID del producto es requerido.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                success:
 *                  type: boolean
 *                  example: false
 *                message:
 *                  type: string
 *                  example: "ID del producto es requerido."
 *      404:
 *        description: Producto no encontrado.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                success:
 *                  type: boolean
 *                  example: false
 *                message:
 *                  type: string
 *                  example: "No se encontró el producto."
 *      500:
 *        description: Error interno en el servidor.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                success:
 *                  type: boolean
 *                  example: false
 *                message:
 *                  type: string
 *                  example: "Error al buscar el producto."
 */
router.get('/id/:id', ProductController.getProductById);

// GET /api/menu/product/name/{name}
/**
 * @openapi
 * /api/menu/product/name/{name}:
 *  get:
 *    summary: Busca un producto por su nombre.
 *    parameters:
 *      - name: name
 *        in: path
 *        required: true
 *        description: Nombre del producto a buscar.
 *        schema:
 *          type: string
 *          example: "Latte"
 *    responses:
 *      200:
 *        description: Detalle del producto encontrado.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                success:
 *                  type: boolean
 *                  example: true
 *                data:
 *                  type: object
 *                  properties:
 *                    id:
 *                      type: string
 *                      example: 6773411f79161d22bd0c69dc
 *                    name:
 *                      type: string
 *                      example: "Caramel Brulée Latte"
 *                    image:
 *                      type: string
 *                      example: ""
 *                    sizeOptions:
 *                      type: object
 *                      additionalProperties:
 *                        type: object
 *                        properties:
 *                          content:
 *                            type: string
 *                            example: "8 fl oz"
 *                      example:
 *                        short:
 *                          content: "8 fl oz"
 *                        tall:
 *                          content: "12 fl oz"
 *                        grande:
 *                          content: "16 fl oz"
 *                        venti:
 *                          content: "20 fl oz"
 *                    description:
 *                      type: string
 *                      example: "Our signature espresso, steamed milk and rich caramel brulée sauce finished with whipped cream and a supreme topping of even more caramel brulée bits."
 *      400:
 *        description: Nombre del producto es requerido.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                success:
 *                  type: boolean
 *                  example: false
 *                message:
 *                  type: string
 *                  example: "Nombre del producto es requerido."
 *      404:
 *        description: Producto no encontrado.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                success:
 *                  type: boolean
 *                  example: false
 *                message:
 *                  type: string
 *                  example: "No se encontró el producto."
 *      500:
 *        description: Error interno en el servidor.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                success:
 *                  type: boolean
 *                  example: false
 *                message:
 *                  type: string
 *                  example: "Error al buscar el producto."
 */
router.get('/name/:name', ProductController.getProductByName);

export default router;


