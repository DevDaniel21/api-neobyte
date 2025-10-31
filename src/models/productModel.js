import { PrismaClient } from '../generated/prisma/index.js';

const prisma = new PrismaClient();

export const create = async (product) => {
    return prisma.produto.create({
        data: product,
    });
};

export const update = async (id, product) => {
    return await prisma.produto.update({
        data: product,
        where: { id },
    });
};

export const list = async () => {
    return prisma.produto.findMany();
};

export const getById = async (id) => {
    return await prisma.produto.findUnique({
        where: { id },
    });
};

export const remove = async (id) => {
    return await prisma.produto.delete({
        where: { id },
    });
};
