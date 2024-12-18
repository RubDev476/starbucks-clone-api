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

export default router;
