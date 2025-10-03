import { PrismaClient } from '../generated/prisma/index.js';

const prisma = new PrismaClient();

export const create = async (user) => {
    return prisma.user.create({
        data: user,
    });
};

export const update = async (id, user) => {
    return await prisma.user.update({
        data: user,
        where: { id },
    });
};

export const list = async () => {
    return prisma.user.findMany();
};

export const getByEmail = async (email) => {
    return await prisma.user.findUnique({
        where: { email },
    });
};

export const getById = async (id) => {
    return await prisma.user.findUnique({
        where: { id },
    });
};

export const remove = async (id) => {
    return await prisma.user.delete({
        where: { id },
    });
};
