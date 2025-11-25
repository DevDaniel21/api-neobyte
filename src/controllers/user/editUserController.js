import { update } from '../../models/userModel.js';

export const editUserController = async (req, res) => {
    const id = req.params.id;
    const profile = req.body;

    const result = await update(+id, profile);

    if (result) {
        res.json({
            message: `Usuário editado com sucesso!`,
            profile: result,
        });
    } else {
        res.json({ message: "Erro ao editar!" });
    }
};
