import { PrismaClient } from '../generated/prisma/index.js';

const prisma = new PrismaClient();

export const create = async (comment) => {
    return prisma.comentario.create({
        data: comment,
    });
};

export const update = async (id, user_id, produto_id, comment) => {
    return await prisma.comentario.update({
        data: comment,
        where: {
            id_user_id_produto_id: { id, user_id, produto_id },
        },
    });
};

export const list = async () => {
    return prisma.comentario.findMany();
};

export const listByProduct = async (produto_id) => {
    return await prisma.comentario.findMany({
        where: {
            produto_id: produto_id,
        },
    });
};

export const getById = async (id, user_id, produto_id) => {
    return await prisma.comentario.findUnique({
        where: {
            id_user_id_produto_id: { id, user_id, produto_id },
        },
    });
};

export const remove = async (id, user_id, produto_id) => {
    return await prisma.comentario.delete({
        where: {
            id_user_id_produto_id: { id, user_id, produto_id },
        },
    });
};
