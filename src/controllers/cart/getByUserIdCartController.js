import { getByUserId } from '../../models/cartModel.js';

export const getByUserIdCartController = async (req, res) => {
    try {
        const user_id = req.params.user_id;

        if (!user_id) {
            return res.json({ error: 'user_id é obrigatório!' });
        }

        const produtoAdicionado = await getByUserId(+user_id);

        if (produtoAdicionado) {
            return res.json({ produtoAdicionado: produtoAdicionado });
        }
    } catch (error) {
        console.error(error);
    }
};
