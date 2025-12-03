// api-neobyte/src/controllers/cart/getByUserIdCartController.js
import { getByUserId } from '../../models/cartModel.js';

export const getByUserIdCartController = async (req, res) => {
    try {
        const user_id = req.params.user_id;

        if (!user_id) {
            return res.status(400).json({
                error: 'user_id é obrigatório!'
            });
        }

        const produtoAdicionado = await getByUserId(+user_id);

        if (produtoAdicionado && produtoAdicionado.length > 0) {
            return res.json({
                produtoAdicionado: produtoAdicionado
            });
        } else {
            return res.json({
                produtoAdicionado: [],
                message: 'Carrinho vazio'
            });
        }
    } catch (error) {
        console.error('Erro ao buscar carrinho:', error);
        return res.status(500).json({
            error: 'Erro interno do servidor',
            message: error.message
        });
    }
};