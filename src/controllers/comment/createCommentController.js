import { create } from '../../models/commentModel.js';

export const createCommentController = async (req, res) => {
    const dados = req.body;

    const result = await create(dados);

    if (result) {
        res.json({
            message: 'Comentário criado com sucesso!',
            comment: result,
        });
    } else {
        res.json({ message: 'Erro ao criar!' });
    }
};
