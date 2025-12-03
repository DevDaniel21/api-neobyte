// api-neobyte/src/models/cartModel.js
import { PrismaClient } from '../generated/prisma/index.js';

const prisma = new PrismaClient();

// Criar/Adicionar produto ao carrinho
export const create = async (user_id, produto_id, quantidade = 1) => {
    try {
        // Verifica se já existe no carrinho
        const itemExistente = await prisma.carrinho.findUnique({
            where: {
                user_id_produto_id: {
                    user_id: parseInt(user_id),
                    produto_id: parseInt(produto_id)
                }
            }
        });

        if (itemExistente) {
            // Atualiza quantidade se já existir
            return await prisma.carrinho.update({
                where: {
                    user_id_produto_id: {
                        user_id: parseInt(user_id),
                        produto_id: parseInt(produto_id)
                    }
                },
                data: {
                    quantidade: itemExistente.quantidade + parseInt(quantidade)
                },
                include: {
                    produto: true,
                    user: {
                        select: {
                            id: true,
                            nome: true
                        }
                    }
                }
            });
        }

        // Cria novo item no carrinho
        return await prisma.carrinho.create({
            data: {
                user_id: parseInt(user_id),
                produto_id: parseInt(produto_id),
                quantidade: parseInt(quantidade)
            },
            include: {
                produto: true,
                user: {
                    select: {
                        id: true,
                        nome: true
                    }
                }
            }
        });
    } catch (error) {
        console.error('Erro no cartModel.create:', error);
        throw error;
    }
};

// Atualizar quantidade no carrinho
export const update = async (user_id, produto_id, quantidade) => {
    try {
        return await prisma.carrinho.update({
            where: {
                user_id_produto_id: {
                    user_id: parseInt(user_id),
                    produto_id: parseInt(produto_id)
                }
            },
            data: {
                quantidade: parseInt(quantidade)
            },
            include: {
                produto: true
            }
        });
    } catch (error) {
        console.error('Erro no cartModel.update:', error);
        // Se o item não existir, cria um novo
        if (error.code === 'P2025') {
            return await create(user_id, produto_id, quantidade);
        }
        throw error;
    }
};

// Buscar carrinho por user_id
export const getByUserId = async (user_id) => {
    try {
        return await prisma.carrinho.findMany({
            where: {
                user_id: parseInt(user_id)
            },
            include: {
                produto: true
            },
            orderBy: {
                produto: {
                    nome: 'asc'
                }
            }
        });
    } catch (error) {
        console.error('Erro no cartModel.getByUserId:', error);
        throw error;
    }
};

// Remover produto do carrinho
export const remove = async (user_id, produto_id) => {
    try {
        return await prisma.carrinho.delete({
            where: {
                user_id_produto_id: {
                    user_id: parseInt(user_id),
                    produto_id: parseInt(produto_id)
                }
            }
        });
    } catch (error) {
        console.error('Erro no cartModel.remove:', error);
        throw error;
    }
};

// Limpar todo o carrinho
export const clear = async (user_id) => {
    try {
        return await prisma.carrinho.deleteMany({
            where: {
                user_id: parseInt(user_id)
            }
        });
    } catch (error) {
        console.error('Erro no cartModel.clear:', error);
        throw error;
    }
};