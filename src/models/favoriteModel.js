import { PrismaClient } from '../generated/prisma/index.js';

const prisma = new PrismaClient();

export const create = async (user_id, product_id) => {
    return prisma.favorito.create({
        data: {
            user_id: user_id,
            product_id: product_id,
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

export const remove = async (user_id, product_id) => {
    return await prisma.favorito.delete({
        where: {
            user_id: user_id,
            product_id: product_id
        },
    });
};
