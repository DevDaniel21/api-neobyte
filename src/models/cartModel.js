import { PrismaClient } from '../generated/prisma/index.js';

const prisma = new PrismaClient();

export const add = async (produtoAdicionado) => {
    return prisma.carrinho.create({
        data: produtoAdicionado,
    });
};

export const update = async (user_id, produto_id, quantidade) => {
    return prisma.carrinho.update({
        data: {
            quantidade,
        },
        where: {
            user_id_produto_id: { user_id, produto_id },
        },
    });
};

export const getByUserId = async (user_id) => {
    return await prisma.carrinho.findMany({
        where: {
            user_id,
        },
        include: {
            produto: true,
        },
    });
};

export const remove = async (user_id, produto_id) => {
    return await prisma.carrinho.delete({
        where: {
            user_id_produto_id: { user_id, produto_id },
        },
    });
};
