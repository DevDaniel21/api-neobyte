import { listByProduct } from '../../models/commentModel.js';

export const listByProductCommentController = async (req, res) => {
    const produto_id = req.params.produto_id;

    const result = await listByProduct(+produto_id);

    if (result) {
        res.json({
            message: `Comentários encontrados com sucesso!`,
            comment: result,
        });
    } else {
        if (result == null) {
            res.status(404).json({ message: 'Comentários não encontrados!' });
        }
    }
};
