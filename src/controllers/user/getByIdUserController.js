import { getById } from '../../models/userModel.js';

export const getByIdUserController = async (req, res) => {
    const id = req.params.id;

    const result = await getById(+id);

    res.json({
        message: `Usuário encontrado com sucesso!`,
        profile: result,
    });
};
