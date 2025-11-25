import { update } from '../../models/commentModel.js';

export const editCommentController = async (req, res) => {
    const id = req.params.id;
    const comment = req.body;

    const result = await update(+id, comment);

    if (result) {
        res.json({
            message: `Comentário editado com sucesso!`,
            comment: result,
        });
    } else {
        res.json({ message: 'Erro ao editar!' });
    }
};
