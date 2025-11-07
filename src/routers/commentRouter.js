import express from 'express';
import { createCommentController } from '../controllers/comment/createCommentController.js';
import { listCommentController } from '../controllers/comment/listCommentController.js';
import { getByIdCommentController } from '../controllers/comment/getByIdCommentController.js';
import { editCommentController } from '../controllers/comment/editCommentController.js';
import { deleteCommentController } from '../controllers/comment/deleteCommentController.js';
import { listByProductCommentController } from '../controllers/comment/listByProductCommentController.js';

const router = express.Router();

router.post('/', createCommentController);
router.get('/', listCommentController);
router.get('/:id', getByIdCommentController);
router.get('/product/:produto_id', listByProductCommentController);
router.put('/:id', editCommentController);
router.delete('/:id', deleteCommentController);

export default router;
