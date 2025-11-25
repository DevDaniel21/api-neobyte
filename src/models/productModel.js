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
    return prisma.produto.findMany({
        select: {
            id: true,
            nome: true,
            valor: true,
            valordesconto: true,
            capa: true,
        },
    });
};

export const getById = async (id) => {
    return await prisma.produto.findUnique({
        where: { id },
        include: {
            comentario: {
                include: {
                    user: {
                        select: {
                            id: true,
                            nome: true,
                        },
                    },
                },
            },
        },
    });
};

export const remove = async (id) => {
    return await prisma.produto.delete({
        where: { id },
    });
};
