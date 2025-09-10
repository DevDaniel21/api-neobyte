import { list } from '../../models/userModel.js';

export const listUserController = async (req, res) => {
    const result = await list();

    res.json({ 
        message: 'Lista de perfis adquiridas com sucesso!',
        profiles: result 
    });
};
