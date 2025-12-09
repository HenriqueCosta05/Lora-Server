import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../../generated/prisma/client';

const prisma = new PrismaClient({
    adapter: new PrismaPg({
        connectionString: process.env.DATABASE_URL || '',
    })
});

export const itemService = {
    createItem: async (name: string) => {
        return await prisma.item.create({
            data: { name },
        });
    },

    getItems: async () => {
        return await prisma.item.findMany();
    },

    getItemById: async (id: number) => {
        return await prisma.item.findUnique({
            where: { id },
        });
    },

    updateItem: async (id: number, name: string) => {
        return await prisma.item.update({
            where: { id },
            data: { name },
        });
    },

    deleteItem: async (id: number) => {
        return await prisma.item.delete({
            where: { id },
        });
    },
};