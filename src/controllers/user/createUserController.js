import { create } from '../../models/userModel.js';

export const createUserController = async (req, res) => {
    const dados = req.body;

    const result = await create(dados);

    if (result) {
        res.json({
            message: 'Usuário criado com sucesso!',
            profile: result,
        });
    } else {
        res.json({ message: 'Erro ao criar!' });
    }
};
