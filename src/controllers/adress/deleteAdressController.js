import { remove } from '../../models/adressModel.js';

export const deleteAdressController = async (req, res) => {
    const { id, user_id } = req.body;

    const result = await remove(+id, +user_id);

    if (result) {
        res.json({
            message: `Endereço com o id ${id} foi deletado com sucesso!`,
            adress: result,
        });
    } else {
        res.json({ message: 'Erro ao deletar!' });
    }
};
