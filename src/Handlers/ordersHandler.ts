import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import { order, OrderStore } from './../Models/ordersModel';
import jwt from 'jsonwebtoken';

dotenv.config();

const makeOrder = new OrderStore();

const getcurrentorder = async (req: Request, res: Response): Promise<void> => {
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
        const id = parseInt(req.params.id)
        const order = await makeOrder.getcurrentorder(id);
        res.json(order)
    } catch (error) {
        res.status(400)
        res.send(error)
    }

}

const addproduct = async (req: Request, res: Response): Promise<void> => {
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
        const id = parseInt(req.params.id)
        const product_id = parseInt(req.body.product_id)
        const quantity = parseInt(req.body.quantity)
        const order = await makeOrder.addproduct(id, product_id, quantity);
        res.json(order)
    } catch (error) {
        res.status(400)
        res.send(error)
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
        const order = req.body;
        const newOrder = await makeOrder.create(order);
        res.json(newOrder)
    } catch (error) {
        res.status(400)
        res.send(error)
    }
}

const index = async (req: Request, res: Response): Promise<void> => {
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
        const orders = await makeOrder.index();
        res.json(orders)
    } catch (error) {
        res.status(400)
        res.send(error)
    }
}

const order_routes = (app: express.Application) => {
    app.get('/api/orders/:id', getcurrentorder)
    app.post('/api/createorders', create)
    app.get('/api/orders', index)
    app.post('/api/orders/:id/products', addproduct)
}

export default order_routes;