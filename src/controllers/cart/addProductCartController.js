import { add } from '../../models/cartModel.js';

export const addProductCartController = async (req, res) => {
    try {
        const { user_id, produto_id } = req.body;

        if (!user_id || !produto_id) {
            return res.json({
                error: 'Erro, user_id e produto_id são necessários!',
            });
        }

        const produtoAdicionado = await add(+user_id, +produto_id);

        if (produtoAdicionado) {
            res.json({
                message: 'Produto adicionado com sucesso!',
                produtoAdicionado: produtoAdicionado,
            });
        }
    } catch (error) {
        console.error(error);
    }
};
