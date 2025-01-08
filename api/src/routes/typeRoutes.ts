import { Router } from 'express';
import TypeController from '../controllers/typeController';

const router = Router();

// GET /api/menu/type/id/{id}
/**
 * @openapi
 * /api/menu/type/id/{id}:
 *  get:
 *    summary: Obtiene el tipo y sus categorias junto con sus productos.
 *    parameters:
 *      - name: id
 *        in: path
 *        required: true
 *        description: ID del tipo a buscar.
 *        schema:
 *          type: string
 *          example: "6773411f79161d22bd0c69da"
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
 *                    id:
 *                      type: string
 *                      example: 6773411f79161d22bd0c69da
 *                    title:
 *                      type: string
 *                      example: Hot Coffees
 *                    categories:
 *                      type: array
 *                      items:
 *                        type: object
 *                        properties:
 *                          id:
 *                            type: string
 *                            example: 6773411f79161d22bd0c69db
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
 *                                imageSmall:
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
router.get('/id/:id', TypeController.getTypeById);

// GET /api/menu/type/title/{title}
/**
 * @openapi
 * /api/menu/type/title/{title}:
 *  get:
 *    summary: Obtiene el tipo y sus categorias junto con sus productos.
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
 *                    id:
 *                      type: string
 *                      example: 6773411f79161d22bd0c69da
 *                    title:
 *                      type: string
 *                      example: Hot Coffees
 *                    categories:
 *                      type: array
 *                      items:
 *                        type: object
 *                        properties:
 *                          id:
 *                            type: string
 *                            example: 6773411f79161d22bd0c69db
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
 *                                imageSmall:
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
router.get('/title/:title', TypeController.getType);



// GET /api/menu/type/slug/{slug}
/**
 * @openapi
 * /api/menu/type/slug/{slug}:
 *  get:
 *    summary: Obtiene el tipo y sus categorias junto con sus productos.
 *    parameters:
 *      - name: slug
 *        in: path
 *        required: true
 *        description: Nombre en slug del tipo a buscar.
 *        schema:
 *          type: string
 *          example: "hot-coffees"
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
 *                    id:
 *                      type: string
 *                      example: 6773411f79161d22bd0c69da
 *                    title:
 *                      type: string
 *                      example: Hot Coffees
 *                    categories:
 *                      type: array
 *                      items:
 *                        type: object
 *                        properties:
 *                          id:
 *                            type: string
 *                            example: 6773411f79161d22bd0c69db
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
 *                                imageSmall:
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
router.get('/slug/:slug', TypeController.getTypeBySlug);


export default router;