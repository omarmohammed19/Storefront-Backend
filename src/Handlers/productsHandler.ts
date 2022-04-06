import { product, productStore } from './../Models/productsModel';
import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();

const makeProduct = new productStore();

const index = async (req: Request, res: Response): Promise<void> => {
    try {
        const product = await makeProduct.index();
        res.json(product);
    } catch (error) {
        res.status(500).send(error);
    }
}

const show = async (req: Request, res: Response): Promise<void> => {
    try {
        const id = parseInt(req.params.id);
        const product = await makeProduct.show(id);
        res.json(product);
    } catch (error) {
        res.status(500).send(error);
    }
}

const create = async (req: Request, res: Response): Promise<void> => {
    try {
        const authorizationHeader = req.headers.authorization
        //@ts-ignore
        const token = authorizationHeader.split(' ')[1]
        //@ts-ignore
        jwt.verify(token, process.env.TOKEN_SECRET)
    } catch (err) {
        res.status(401)
        res.json(`Access denied, invalid token ${err}`)
        return
    }
    try {
        const product = req.body;
        const newProduct = await makeProduct.create(product);
        res.json(newProduct)
    } catch (error) {
        res.status(400)
        res.send(error)
    }
}

const product_routes = (app: express.Application) => {
    app.get('/api/products', index);
    app.get('/api/products/:id', show);
    app.post('/api/createproduct', create);
}

export default product_routes;