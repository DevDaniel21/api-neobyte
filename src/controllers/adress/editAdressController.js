import { update } from '../../models/adressModel.js';

export const editAdressController = async (req, res) => {
    const id = req.params.id;
    const adress = req.body;

    const result = await update(+id, adress);

    if (result) {
        res.json({
            message: `Endereço editado com sucesso!`,
            adress: result,
        });
    } else {
        res.json({ message: "Erro ao editar!" });
    }
};
