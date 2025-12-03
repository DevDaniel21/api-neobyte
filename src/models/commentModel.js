import { PrismaClient } from '../generated/prisma/index.js';

const prisma = new PrismaClient();

export const create = async (commentData) => {
    // Estrutura correta para o Prisma - apenas IDs, não objetos completos
    return prisma.comentario.create({
        data: {
            texto: commentData.texto || '',
            estrela: parseInt(commentData.estrela) || 5,
            produto_id: parseInt(commentData.produto_id),
            user_id: parseInt(commentData.user_id)
        },
        include: {
            user: {
                select: {
                    id: true,
                    nome: true,
                },
            },
        },
    });
};

export const update = async (id, commentData) => {
    return await prisma.comentario.update({
        data: {
            texto: commentData.texto,
            estrela: parseInt(commentData.estrela) || 5
        },
        where: {
            id: parseInt(id),
        },
        include: {
            user: {
                select: {
                    id: true,
                    nome: true,
                },
            },
        },
    });
};

export const list = async () => {
    return prisma.comentario.findMany({
        include: {
            user: {
                select: {
                    id: true,
                    nome: true,
                },
            },
        },
    });
};

export const listByProduct = async (produto_id) => {
    return await prisma.comentario.findMany({
        where: {
            produto_id: parseInt(produto_id),
        },
        include: {
            user: {
                select: {
                    id: true,
                    nome: true,
                },
            },
        },
        orderBy: {
            createdAt: 'desc',
        },
    });
};

export const getById = async (id) => {
    return await prisma.comentario.findUnique({
        where: {
            id: parseInt(id),
        },
        include: {
            user: {
                select: {
                    id: true,
                    nome: true,
                },
            },
        },
    });
};

export const remove = async (id) => {
    return await prisma.comentario.delete({
        where: {
            id: parseInt(id),
        },
    });
};