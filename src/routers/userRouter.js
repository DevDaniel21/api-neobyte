import express from 'express';
import { createUserController } from '../controllers/user/createUserController.js';
import { listUserController } from '../controllers/user/listUserController.js';
import { getByIdUserController } from '../controllers/user/getByIdUserController.js';
import { editUserController } from '../controllers/user/editUserController.js';
import { deleteUserController } from '../controllers/user/deleteUserController.js';
import { getByEmailUserController } from '../controllers/user/getByEmailUserController.js';

const router = express.Router();

router.post('/', createUserController);
router.get('/', listUserController);
router.get('/email/:email', getByEmailUserController);
router.get('/:id', getByIdUserController);
router.put('/:id', editUserController);
router.delete('/:id', deleteUserController);

export default router;
