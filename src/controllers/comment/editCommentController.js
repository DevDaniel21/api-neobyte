import { update } from '../../models/commentModel.js';

export const editCommentController = async (req, res) => {
    try {
        const id = req.params.id;
        const { texto, estrela } = req.body;

        // Validações
        if (!texto || !texto.trim()) {
            return res.status(400).json({
                message: 'O texto do comentário é obrigatório'
            });
        }

        const estrelaNum = parseInt(estrela);
        if (isNaN(estrelaNum) || estrelaNum < 1 || estrelaNum > 5) {
            return res.status(400).json({
                message: 'A avaliação deve ser entre 1 e 5 estrelas'
            });
        }

        const result = await update(id, {
            texto: texto.trim(),
            estrela: estrelaNum
        });

        if (result) {
            res.json({
                message: 'Comentário atualizado com sucesso!',
                comment: result,
            });
        } else {
            res.status(404).json({
                message: 'Comentário não encontrado'
            });
        }
    } catch (error) {
        console.error('Erro no editCommentController:', error);
        res.status(500).json({
            message: 'Erro interno no servidor',
            error: error.message
        });
    }
};