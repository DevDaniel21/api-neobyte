import { list } from '../../models/commentModel.js';

export const listCommentController = async (req, res) => {
    const result = await list();

    if (result) {
        res.json({
            message: `Comentários encontrados com sucesso!`,
            comment: result,
        });
    } else {
        res.json({ message: "Erro ao listar!" });
    }
};
