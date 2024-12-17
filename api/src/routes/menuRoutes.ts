import { Router } from 'express';
import { getMenu } from '../controllers/menuController';

const router = Router();

// GET /api/menu
/**
 * @openapi
 * /menu:
 *  get:
 *      summary: Obtiene el menú principal.
 *      responses:
 *          200:
 *              description: list of categories
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              type: object
 *                              properties:
 *                                  id:
 *                                      type: integer
 *                                      example: 1
 *                                  name:
 *                                      type: string
 *                                      example: latte
 *                                  price:
 *                                      type: number
 *                                      example: 40.5
 */
router.get('/', getMenu);

export default router;
