import { PrismaClient } from '../generated/prisma/index.js';

const prisma = new PrismaClient();

export const create = async (adress) => {
    return prisma.endereco.create({
        data: adress,
    });
};

export const update = async (id, user_id, adress) => {
    return await prisma.endereco.update({
        data: adress,
        where: {
            id_user_id: { id, user_id },
        },
    });
};

export const getByUserId = async (user_id) => {
    return await prisma.endereco.findMany({
        where: { user_id },
    });
};

export const getById = async (id, user_id) => {
    return await prisma.endereco.findUnique({
        where: {
            id_user_id: { id, user_id },
        },
    });
};

export const remove = async (id, user_id) => {
    return await prisma.endereco.delete({
        where: {
            id_user_id: { id, user_id },
        },
    });
};
