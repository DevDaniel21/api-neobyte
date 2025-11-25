import { update } from '../../models/adressModel.js';

export const editAdressController = async (req, res) => {
    const { id, user_id } = req.body;
    const adress = req.body;
    delete adress.id;
    delete adress.user_id;    

    const result = await update(+id, +user_id, adress);

    if (result) {
        res.json({
            message: `Endereço editado com sucesso!`,
            adress: result,
        });
    } else {
        res.json({ message: "Erro ao editar!" });
    }
};
