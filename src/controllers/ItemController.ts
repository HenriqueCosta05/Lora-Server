import { Request, Response, NextFunction } from 'express';
import { itemService } from '../services/ItemService';

// Create an item
export const createItem = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { name } = req.body;
        const newItem = await itemService.createItem(name);
        res.status(201).json(newItem);
    } catch (error) {
        next(error);
    }
};

// Read all items
export const getItems = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const allItems = await itemService.getItems();
        res.json(allItems);
    } catch (error) {
        next(error);
    }
};

// Read single item
export const getItemById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = parseInt(req.params.id, 10);
        const item = await itemService.getItemById(id);
        if (!item) {
            res.status(404).json({ message: 'Item not found' });
            return;
        }
        res.json(item);
    } catch (error) {
        next(error);
    }
};

// Update an item
export const updateItem = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = parseInt(req.params.id, 10);
        const { name } = req.body;
        const updatedItem = await itemService.updateItem(id, name);
        res.json(updatedItem);
    } catch (error) {
        if (error instanceof Error && (error as any).code === 'P2025') {
            res.status(404).json({ message: 'Item not found' });
        } else {
            next(error);
        }
    }
};

// Delete an item
export const deleteItem = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = parseInt(req.params.id, 10);
        const deletedItem = await itemService.deleteItem(id);
        res.json(deletedItem);
    } catch (error) {
        if (error instanceof Error && (error as any).code === 'P2025') {
            res.status(404).json({ message: 'Item not found' });
        } else {
            next(error);
        }
    }
};