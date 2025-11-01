import express from 'express';
import { createAdressController } from '../controllers/adress/createAdressController.js';
import { deleteAdressController } from '../controllers/adress/deleteAdressController.js';
import { editAdressController } from '../controllers/adress/editAdressController.js';
import { getByIdAdressController } from '../controllers/adress/getByIdAdressController.js';
import { getByUserIdAdressController } from '../controllers/adress/getByUserIdAdressController.js';

const router = express.Router();

router.post('/', createAdressController);
router.get('/user/:userId', getByUserIdAdressController);
router.get('/:id', getByIdAdressController);
router.put('/:id', editAdressController);
router.delete('/:id', deleteAdressController);

export default router;
