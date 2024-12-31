import { Router } from 'express';
import MenuController from '../controllers/menuController';
import TypeController from '../controllers/typeController';

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
 *                      name:
 *                        type: string
 *                        example: Drinks
 *                      slug:
 *                        type: string
 *                        example: drinks
 *                      types:
 *                        type: array
 *                        items:
 *                          type: object
 *                          properties:
 *                            title:
 *                              type: string
 *                              example: Hot Coffees
 *                            slug:
 *                              type: string
 *                              example: hot-coffees
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
router.get('/menu', MenuController.getMenu);


// GET /api/menu/type/{title}
/**
 * @openapi
 * /api/menu/type/{title}:
 *  get:
 *    summary: Obtiene las categorías del menú junto con sus productos.
 *    parameters:
 *      - name: title
 *        in: path
 *        required: true
 *        description: Nombre del tipo a buscar.
 *        schema:
 *          type: string
 *          example: "Hot Coffees"
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
 *                  type: object
 *                  properties:
 *                    title:
 *                      type: string
 *                      example: Hot Coffees
 *                    categories:
 *                      type: array
 *                      items:
 *                        type: object
 *                        properties:
 *                          title:
 *                            type: string
 *                            example: Americanos
 *                          products:
 *                            type: array
 *                            items:
 *                              type: object
 *                              properties:
 *                                id:
 *                                  type: string
 *                                  example: 6773411f79161d22bd0c69dc
 *                                name:
 *                                  type: string
 *                                  example: Caffè Americano
 *                                image:
 *                                  type: string
 *                                  example: ""
 *      404:
 *        description: Tipo no encontrado.
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
 *                  example: No se encontraron tipos con ese nombre
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
router.get('/menu/type/:title', TypeController.getType);


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
router.get('/menu/categories/products/:name', MenuController.getProductByName);


export default router;
