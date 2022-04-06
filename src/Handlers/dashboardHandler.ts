import { dashboardStore } from './../Services/dashboard';
import express, { Request, Response } from 'express';
import dotenv from 'dotenv';


dotenv.config();

const makeDashboard = new dashboardStore();

const get5popularproducts = async (req: Request, res: Response): Promise<void> => {
    try {
        const products = await makeDashboard.get5popular();
        res.json(products)
    } catch (error) {
        res.status(400)
        res.send(error)
    }

}

const dashboard_router = (app: express.Application) => {
    app.get('/api/dashboard/popular', get5popularproducts)
}

export default dashboard_router;