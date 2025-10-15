import { list } from '../../models/userModel.js';

export const listUserController = async (req, res) => {
    const result = await list();

    if (result) {
        res.json({
            message: `Usuários encontrado com sucesso!`,
            profile: result,
        });
    } else {
        res.json({ message: "Erro ao listar!" });
    }
};
