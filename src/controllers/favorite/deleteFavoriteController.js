import { remove } from '../../models/favoriteModel.js';

export const deleteFavoriteController = async (req, res) => {
    try {
        const { user_id, product_id } = req.body;

        if (!user_id || !product_id) {
            return res.json({
                error: 'Erro, user_id e product_id é obrigatório!',
            });
        }

        const favorite = await remove(+user_id, +product_id);

        if (favorite) {
            res.json({
                message: 'Favorite removido com sucesso!',
                favorite: favorite,
            });
        }
    } catch (error) {
        console.error(error);
    }
};
