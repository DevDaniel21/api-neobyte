import { getByUserId } from '../../models/favoriteModel.js';

export const getByUserIdFavoriteController = async (req, res) => {
    try {
        const { user_id } = req.params;

        if (!user_id) {
            return res.json({ error: 'user_id é obrigatório!' });
        }

        const favorites = await getByUserId(+user_id);

        if (favorites) {
            return res.json({ favorites: favorites });
        }
    } catch (error) {
        console.error(error);
    }
};
