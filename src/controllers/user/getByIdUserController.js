import { getById } from '../../models/userModel.js';

export const getByIdUserController = async (req, res) => {
    const id = req.params.id;

    const result = await getById(+id);

    if (result) {
        res.json({
            message: `Usuário encontrado com sucesso!`,
            profile: result,
        });
    } else {
        if (result == null) {
            res.status(404).json({ message: 'Usuário não encontrado!' });
        }
    }
};
