import { update } from '../../models/commentModel.js';

export const editCommentController = async (req, res) => {
    const { id, user_id, produto_id } = req.body;
    const comment = req.body;
    delete comment.id;
    delete comment.user_id;
    delete comment.produto_id;

    const result = await update(+id, +user_id, +produto_id, comment);

    if (result) {
        res.json({
            message: `Comentário editado com sucesso!`,
            comment: result,
        });
    } else {
        res.json({ message: 'Erro ao editar!' });
    }
};
