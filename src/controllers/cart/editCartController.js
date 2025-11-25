import { update } from '../../models/cartModel.js';

export const editCartController = async (req, res) => {
    const { user_id, produto_id, quantidade } = req.body;

    const result = await update(+user_id, +produto_id, +quantidade);

    if (result) {
        res.json({
            message: `Quantidade editada com sucesso!`,
            produtoAdicionado: result,
        });
    } else {
        res.json({ message: 'Erro ao editar!' });
    }
};
