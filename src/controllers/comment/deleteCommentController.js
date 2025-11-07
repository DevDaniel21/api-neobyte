import { remove } from '../../models/commentModel.js';

export const deleteCommentController = async (req, res) => {
    const { id, user_id, produto_id } = req.body;

    const result = await remove(+id, +user_id, +produto_id);

    if (result) {
        res.json({
            message: `Comentário com o id ${id} foi deletado com sucesso!`,
            comment: result,
        });
    } else {
        res.json({ message: 'Erro ao deletar!' });
    }
};
