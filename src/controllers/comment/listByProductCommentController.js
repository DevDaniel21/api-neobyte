import { listByProduct } from '../../models/commentModel.js';

export const listByProductCommentController = async (req, res) => {
    try {
        const produto_id = req.params.produto_id;

        if (!produto_id) {
            return res.status(400).json({
                message: 'produto_id é obrigatório'
            });
        }

        const result = await listByProduct(produto_id);

        if (result) {
            res.json({
                message: `Comentários encontrados com sucesso!`,
                comment: result,
            });
        } else {
            res.json({
                message: "Nenhum comentário encontrado",
                comment: []
            });
        }
    } catch (error) {
        console.error('Erro no listByProductCommentController:', error);
        res.status(500).json({
            message: 'Erro interno no servidor',
            error: error.message
        });
    }
};