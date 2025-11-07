import { getById } from '../../models/commentModel.js';

export const getByIdCommentController = async (req, res) => {
    const { id, user_id, produto_id } = req.body;

    const result = await getById(+id, +user_id, +produto_id);

    if (result) {
        res.json({
            message: `Comentário encontrado com sucesso!`,
            comment: result,
        });
    } else {
        if (result == null) {
            res.status(404).json({ message: 'Comentário não encontrado!' });
        }
    }
};
