import { add, getByUserId } from '../../models/cartModel.js';

export const addProductCartController = async (req, res) => {
    let produtoAdicionado = null;
    try {
        const { user_id, produto_id } = req.body;

        if (user_id && produto_id) {
            const cart = await getByUserId(+user_id);
            if (cart) {
                produtoAdicionado = cart.some(
                    (item) => item.produto_id === +produto_id
                );
            }
        }
    } catch (error) {
        console.error('Erro ao buscar carrinho do usuário');
    }

    if (produtoAdicionado) {
        return res.json({
            error: 'Erro, produto já adicionado ao carrinho',
        });
    }

    try {
        const { user_id, produto_id } = req.body;
        const data = req.body;

        if (!user_id || !produto_id) {
            return res.json({
                error: 'Erro, user_id e produto_id são necessários!',
            });
        }

        data.user_id = +user_id;
        data.produto_id = +produto_id;

        const produtoAdicionado = await add(data);

        if (produtoAdicionado) {
            res.json({
                message: 'Produto adicionado com sucesso!',
                produtoAdicionado: produtoAdicionado,
            });
        }
    } catch (error) {
        return console.error(error);
    }
};
