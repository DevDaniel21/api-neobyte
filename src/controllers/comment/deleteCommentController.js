import { remove } from '../../models/commentModel.js';

export const deleteCommentController = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await remove(id);

        if (result) {
            res.json({
                message: 'Comentário excluído com sucesso!',
            });
        } else {
            res.status(404).json({
                message: 'Comentário não encontrado'
            });
        }
    } catch (error) {
        console.error('Erro no deleteCommentController:', error);

        // Erro específico do Prisma
        if (error.code === 'P2025') {
            return res.status(404).json({
                message: 'Comentário não encontrado'
            });
        }

        res.status(500).json({
            message: 'Erro interno no servidor',
            error: error.message
        });
    }
};