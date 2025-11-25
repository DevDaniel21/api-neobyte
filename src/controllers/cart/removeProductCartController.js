import { remove } from '../../models/cartModel.js';

export const removeProductCartController = async (req, res) => {
    try {
        const { user_id, produto_id } = req.body;

        if (!user_id || !produto_id) {
            return res.json({
                error: 'Erro, user_id e produto_id é obrigatório!',
            });
        }

        const produtoAdicionado = await remove(+user_id, +produto_id);

        if (produtoAdicionado) {
            res.json({
                message: 'Produto removido com sucesso!',
                produtoAdicionado: produtoAdicionado,
            });
        }
    } catch (error) {
        console.error(error);
    }
};
