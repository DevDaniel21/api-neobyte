import { update } from '../../models/productModel.js';

export const editProductController = async (req, res) => {
    const id = req.params.id;
    const dados = req.body;

    const result = await update(+id, dados);

    res.json({
        message: 'Produto atualizado com sucesso!',
        product: result,
    });
};
