import { remove } from '../../models/adressModel.js';

export const deleteAdressController = async (req, res) => {
    const id = req.params.id;

    const result = await remove(+id);

    if (result) {
        res.json({
            message: `Endereço com o id ${id} foi deletado com sucesso!`,
            adress: result,
        });
    } else {
        res.json({ message: 'Erro ao deletar!' });
    }
};
