import { Router } from 'express';
import MenuController from '../controllers/menuController';
import typeRoutes from "./typeRoutes";
import productRoutes from "./productRoutes";

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
 *                      id:
 *                        type: string
 *                        example: 6773411f79161d22bd0c69d9
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
 *                            id:
 *                              type: string
 *                              example: 6773411f79161d22bd0c69da
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

// Type Routes
router.use('/menu/type', typeRoutes);

// Product Routes
router.use('/menu/product', productRoutes);

export default router;
