import { Request, Response } from 'express';

export const getMenu = (req: Request, res: Response) => {
    const menu = [
        { id: 1, name: 'Latte', price: 4.5 },
        { id: 2, name: 'Cappuccino', price: 4.0 },
        { id: 3, name: 'Espresso', price: 3.0 },
    ];
    res.json(menu);
};
