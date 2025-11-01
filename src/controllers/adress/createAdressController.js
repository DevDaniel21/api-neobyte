import { create } from '../../models/adressModel.js';

export const createAdressController = async (req, res) => {
    const dados = req.body;

    const result = await create(dados);

    if (result) {
        res.json({
            message: 'Endereço criado com sucesso!',
            adress: result,
        });
    } else {
        res.json({ message: 'Erro ao criar!' });
    }
};
