import { PrismaClient } from '../generated/prisma/index.js';

const prisma = new PrismaClient();

export const create = async (user_id, produto_id) => {
    return prisma.favorito.create({
        data: {
            user_id: user_id,
            produto_id: produto_id,
        },
    });
};

export const getByUserId = async (user_id) => {
    return await prisma.favorito.findMany({
        where: {
            user_id: user_id,
        },
        include: {
            produto: true,
        },
    });
};

export const getByUserIdAndProdutoId = async (user_id, produto_id) => {
    return await prisma.favorito.findUnique({
        where: {
            produto_id_user_id: {
                user_id: user_id,
                produto_id: produto_id,
            }
        },
    });
};

export const remove = async (user_id, produto_id) => {
    return await prisma.favorito.delete({
        where: {
            produto_id_user_id: {
                user_id: user_id,
                produto_id: produto_id,
            },
        },
    });
};
