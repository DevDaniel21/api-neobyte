import { PrismaClient } from '../generated/prisma/index.js';

const prisma = new PrismaClient();

export const create = async (comment) => {
    return prisma.comentario.create({
        data: comment,
    });
};

export const update = async (id, comment) => {
    return await prisma.comentario.update({
        data: comment,
        where: {
            id,
        },
    });
};

export const list = async () => {
    return prisma.comentario.findMany();
};

export const listByProduct = async (produto_id) => {
    return await prisma.comentario.findMany({
        where: {
            produto_id,
        },
    });
};

export const getById = async (id) => {
    return await prisma.comentario.findUnique({
        where: {
            id,
        },
    });
};

export const remove = async (id) => {
    return await prisma.comentario.delete({
        where: {
            id,
        },
    });
};
