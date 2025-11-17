import { getByUserIdAndProdutoId } from '../../models/favoriteModel.js';

export const getByUserIdAndProdutoIdFavorite = async (req, res) => {
    try {
        const { user_id, produto_id } = req.params;

        if (!user_id || !produto_id) {
            return res.json({
                error: 'user_id e produto_id são obrigatórios!',
            });
        }

        const favorite = await getByUserIdAndProdutoId(+user_id + produto_id);

        if (!favorite) {
            return res.status(404).json({
                message: 'Favorito não encontrado',
            });
        }

        return res.json({ favorite });
    } catch (error) {
        return res.json({
            error: 'Erro ao buscar favorito',
        });
    }
};
