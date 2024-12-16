import { Router } from 'express';
import { getMenu } from '../controllers/menuController';

const router = Router();

// GET /api/menu
router.get('/', getMenu);

export default router;
