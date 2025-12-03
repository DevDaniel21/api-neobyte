// api-neobyte/src/controllers/cart/addProductCartController.js
import { create } from '../../models/cartModel.js';

export const addProductCartController = async (req, res) => {
    try {
        const { user_id, produto_id, quantidade = 1 } = req.body;

        // Validação dos dados
        if (!user_id || !produto_id) {
            return res.status(400).json({
                message: 'user_id e produto_id são obrigatórios'
            });
        }

        console.log(`🛒 Adicionando produto ${produto_id} ao carrinho do usuário ${user_id}`);

        const result = await create(+user_id, +produto_id, +quantidade);

        if (result) {
            // Verifica se foi atualizado ou criado novo
            const message = result.quantidade > quantidade
                ? 'Quantidade atualizada no carrinho!'
                : 'Produto adicionado ao carrinho com sucesso!';

            return res.status(200).json({
                message: message,
                produtoAdicionado: result
            });
        } else {
            return res.status(500).json({
                message: 'Erro ao adicionar ao carrinho'
            });
        }

    } catch (error) {
        console.error('Erro ao adicionar produto ao carrinho:', error);

        // Tratamento de erros específicos
        if (error.code === 'P2003') {
            return res.status(404).json({
                message: 'Usuário ou produto não encontrado'
            });
        }

        if (error.code === 'P2002') {
            return res.status(409).json({
                message: 'Item já existe no carrinho'
            });
        }

        return res.status(500).json({
            message: 'Erro interno do servidor',
            error: error.message
        });
    }
};