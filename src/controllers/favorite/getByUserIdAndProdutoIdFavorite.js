import { getByUserIdAndProdutoId } from '../../models/favoriteModel.js';

export const getByUserIdAndProdutoIdFavorite = async (req, res) => {
    try {
        const { user_id, produto_id } = req.params;

        if (!user_id || !produto_id) {
            return res.json({
                error: 'user_id e produto_id são obrigatórios!',
            });
        }

        const favorite = await getByUserIdAndProdutoId(+user_id, +produto_id);

        // Retorna null se não encontrar, não 404
        return res.json({ favorite: favorite || null });
    } catch (error) {
        console.error(error);
        return res.json({
            error: 'Erro ao buscar favorito',
        });
    }
};