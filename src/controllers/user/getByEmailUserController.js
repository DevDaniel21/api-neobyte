import { getByEmail } from '../../models/userModel.js';

export const getByEmailUserController = async (req, res) => {
    const email = req.params.email;

    const result = await getByEmail(email);

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
