import { remove } from '../../models/userModel.js';

export const deleteUserController = async (req, res) => {
    const id = req.params.id;

    const result = await remove(+id);

    if (result) {
        res.json({
            message: `Perfil com o id ${id} foi deletado com sucesso!`,
            profile: result,
        });
    } else {
        res.json({ message: 'Erro ao deletar!' });
    }
};
