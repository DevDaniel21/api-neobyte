import express from 'express';
import { createFavoriteController } from '../controllers/favorite/createFavoriteController.js';
import { getByUserIdFavoriteController } from '../controllers/favorite/getByUserIdFavoriteController.js';
import { getByUserIdAndProdutoIdFavorite } from '../controllers/favorite/getByUserIdAndProdutoIdFavorite.js';
import { deleteFavoriteController } from '../controllers/favorite/deleteFavoriteController.js';

const router = express.Router();

router.post('/', createFavoriteController);
router.get('/:user_id', getByUserIdFavoriteController);
router.get('/:user_id/:produto_id', getByUserIdAndProdutoIdFavorite);
router.delete('/', deleteFavoriteController);
// TODO nome da rota

export default router;
