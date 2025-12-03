import { create } from '../../models/commentModel.js';

export const createCommentController = async (req, res) => {
    try {
        const { texto, estrela, produto_id, user_id } = req.body;

        // Validações
        if (!texto || !texto.trim()) {
            return res.status(400).json({
                message: 'O texto do comentário é obrigatório'
            });
        }

        if (!produto_id) {
            return res.status(400).json({
                message: 'O produto_id é obrigatório'
            });
        }

        if (!user_id) {
            return res.status(400).json({
                message: 'O user_id é obrigatório'
            });
        }

        // Valida estrelas (1-5)
        const estrelaNum = parseInt(estrela);
        if (isNaN(estrelaNum) || estrelaNum < 1 || estrelaNum > 5) {
            return res.status(400).json({
                message: 'A avaliação deve ser entre 1 e 5 estrelas'
            });
        }

        const result = await create({
            texto: texto.trim(),
            estrela: estrelaNum,
            produto_id: parseInt(produto_id),
            user_id: parseInt(user_id)
        });

        if (result) {
            res.status(201).json({
                message: 'Comentário criado com sucesso!',
                comment: result,
            });
        } else {
            res.status(500).json({
                message: 'Erro ao criar comentário'
            });
        }
    } catch (error) {
        console.error('Erro no createCommentController:', error);

        // Erro específico do Prisma
        if (error.code === 'P2003') {
            return res.status(400).json({
                message: 'Produto ou usuário não encontrado'
            });
        }

        res.status(500).json({
            message: 'Erro interno no servidor',
            error: error.message
        });
    }
};