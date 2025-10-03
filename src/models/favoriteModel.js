import { PrismaClient } from '../generated/prisma/index.js';

const prisma = new PrismaClient();

export const create = async (favorite) => {
    return prisma.favorite.create({
        data: favorite,
    });
};

export const update = async (id, favorito) => {
    return await prisma.favorite.update({
        data: favorite,
        where: { id },
    });
};

export const list = async () => {
    return prisma.favorite.findMany();
};

export const getById = async (id) => {
    return await prisma.favorite.findUnique({
        where: { id },
    });
};

export const remove = async (id) => {
    return await prisma.favorite.delete({
        where: { id },
    });
};
