import { getByEmail } from '../../models/userModel.js';

export const getByEmailUserController = async (req, res) => {
    const email = req.params.email;

    const result = await getByEmail(email);

    res.json({
        message: `Usuário encontrado com sucesso!`,
        profile: result,
    });
};
