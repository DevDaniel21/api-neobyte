import { getByUserIdAndProdutoId } from '../../models/favoriteModel.js';

export const getByUserIdAndProdutoIdFavorite = async (req, res) => {
    try {
        const { user_id, produto_id } = req.params;

        if (!user_id) {
            return res.json({ error: 'user_id e produto_id é obrigatório!' });
        }

        const favorite = await getByUserIdAndProdutoId(+user_id, +produto_id);

        if (favorite) {
            return res.json({ favorite: favorite });
        }
    } catch (error) {
        console.error(error);
    }
};
