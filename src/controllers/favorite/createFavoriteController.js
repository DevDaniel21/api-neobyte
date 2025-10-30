import { create } from '../../models/favoriteModel.js';

export const createFavoriteController = async (req, res) => {
    try {
        const { user_id, product_id } = req.body;

        if (!user_id || !product_id) {
            return res.json({
                error: 'Erro, user_id e product_id são necessários!',
            });
        }

        const favorite = await create(+user_id, +product_id);

        if (favorite) {
            res.json({
                message: 'Favorito criado com sucesso!',
                favorite: favorite,
            });
        }
    } catch (error) {
        console.error(error);
    }
};
