import { getById } from '../../models/adressModel.js';

export const getByIdAdressController = async (req, res) => {
    const { id, user_id } = req.body;

    const result = await getById(+id, +user_id);

    if (result) {
        res.json({
            message: `Endereço encontrado com sucesso!`,
            profile: result,
        });
    } else {
        if (result == null) {
            res.status(404).json({ message: 'Endereço não encontrado!' });
        }
    }
};
