import express from 'express';
import { addProductCartController } from '../controllers/cart/addProductCartController.js';
import { editCartController } from '../controllers/cart/editCartController.js';
import { getByUserIdCartController } from '../controllers/cart/getByUserIdCartController.js';
import { removeProductCartController } from '../controllers/cart/removeProductCartController.js';

const router = express.Router();

router.post('/', addProductCartController);
router.put('/', editCartController);
router.get('/:user_id', getByUserIdCartController);
router.delete('/', removeProductCartController);

export default router;
