import { getByUserId } from '../../models/adressModel.js';

export const getByUserIdAdressController = async (req, res) => {
    const user_id = req.params.user_id;

    const result = await getByUserId(+user_id);

    if (result) {
        res.json({
            message: `Endereço encontrado com sucesso!`,
            adress: result,
        });
    } else {
        if (result == null) {
            res.status(404).json({ message: 'Endereço não encontrado!' });
        }
    }
};
