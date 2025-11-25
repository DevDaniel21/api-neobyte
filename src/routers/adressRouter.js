import express from 'express';
import { createAdressController } from '../controllers/adress/createAdressController.js';
import { deleteAdressController } from '../controllers/adress/deleteAdressController.js';
import { editAdressController } from '../controllers/adress/editAdressController.js';
import { getByIdAdressController } from '../controllers/adress/getByIdAdressController.js';
import { getByUserIdAdressController } from '../controllers/adress/getByUserIdAdressController.js';

const router = express.Router();

router.post('/', createAdressController);
router.get('/user/:user_id', getByUserIdAdressController);
router.get('/', getByIdAdressController);
router.put('/', editAdressController);
router.delete('/', deleteAdressController);

export default router;
