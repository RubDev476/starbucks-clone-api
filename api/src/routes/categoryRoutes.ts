import { Router } from 'express';
import CategoryController from '../controllers/categoryController';

const router = Router();

// GET /api/menu
/**
 * @openapi
 * /api/menu:
 *  get:
 *    summary: Obtiene el menú principal.
 *    responses:
 *      200:
 *        description: Lista de categorías con sus tipos relacionados.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                success:
 *                  type: boolean
 *                  example: true
 *                data:
 *                  type: array
 *                  items:
 *                    type: object
 *                    properties:
 *                      _id:
 *                        type: string
 *                        example: cf1a4ad9-a2ca-436a-93b1-369cda4a4740
 *                      name:
 *                        type: string
 *                        example: Bebidas
 *                      types:
 *                        type: array
 *                        items:
 *                          type: object
 *                          properties:
 *                            _id:
 *                              type: string
 *                              example: da4f0bca-3a61-4371-941d-84121fc6d35c
 *                            title:
 *                              type: string
 *                              example: Bebidas Calientes
 *                            image:
 *                              type: string
 *                              example: ""
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
 *                  example: Error al obtener los datos
 */
router.get('/menu', CategoryController.getMenu);


// GET /api/menu/categories
/**
 * @openapi
 * /api/menu/categories:
 *  get:
 *    summary: Obtiene las categorías del menú.
 *    responses:
 *      200:
 *        description: Lista de categorías con sus productos.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                success:
 *                  type: boolean
 *                  example: true
 *                data:
 *                  type: array
 *                  items:
 *                    type: object
 *                    properties:
 *                      _id:
 *                        type: string
 *                        example: cf1a4ad9-a2ca-436a-93b1-369cda4a4740
 *                      name:
 *                        type: string
 *                        example: Bebidas
 *                      types:
 *                        type: array
 *                        items:
 *                          type: object
 *                          properties:
 *                            _id:
 *                              type: string
 *                              example: da4f0bca-3a61-4371-941d-84121fc6d35c
 *                            title:
 *                              type: string
 *                              example: Bebidas Calientes
 *                            image:
 *                              type: string
 *                              example: ""
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
 *                  example: Error al obtener los datos
 */
router.get('/menu/categories', CategoryController.getCategories);


// GET /api/products/{name}
/**
 * @openapi
 * /api/menu/categories/products/{name}:
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
 *                    _id:
 *                      type: string
 *                      example: cf1a4ad9-a2ca-436a-93b1-369cda4a4740
 *                    name:
 *                      type: string
 *                      example: Latte
 *                    description:
 *                      type: string
 *                      example: Café con leche espumada.
 *                    price:
 *                      type: number
 *                      example: 3.99
 *                    stock:
 *                      type: number
 *                      example: 25
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
 *                  example: Producto no encontrado.
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
 *                  example: Error al buscar el producto.
 */
router.get('/menu/categories/products/:name', CategoryController.getProductByName);


export default router;
