import { Request, Response } from 'express';
import { getItems } from '../src/controllers/ItemController';
import { PrismaClient } from '../generated/prisma/client';

jest.mock('../generated/prisma/client', () => {
    return {
        PrismaClient: jest.fn().mockImplementation(() => ({
            item: {
                findMany: jest.fn().mockResolvedValue([]),
            },
        })),
    };
});

describe('Item Controller', () => {
    it('should return an empty array when no items exist', async () => {
        const req = {} as Request;
        const res = { json: jest.fn() } as unknown as Response;
        const next = jest.fn();

        await getItems(req, res, next);
        expect(res.json).toHaveBeenCalledWith([]);
    });
});