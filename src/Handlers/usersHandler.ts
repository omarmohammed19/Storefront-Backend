import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import { User, UserStore } from './../Models/usersModel';
import jwt from 'jsonwebtoken';

dotenv.config();

const makeUser = new UserStore();

const {
    TOKEN_SECRET
} = process.env


const index = async (req: Request, res: Response) => {
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

    const users = await makeUser.index();
    res.json(users)
}

const show = async (req: Request, res: Response) => {
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
        const id = parseInt(req.params.id);
        const user = await makeUser.show(id);
        res.json(user)
    } catch (error) {
        res.status(400)
        res.send(error)
    }
}

const create = async (req: Request, res: Response) => {
    try {
        const user = req.body;
        //@ts-ignore
        var token = jwt.sign({ user: user }, TOKEN_SECRET)
        const newUser = await makeUser.create(user);
        res.json(token)
    } catch (error) {
        res.status(400)
        res.send(error)
    }
}



const user_routes = (app: express.Application) => {
    app.get('/users', index);
    app.get('/users/:id', show);
    app.post('/createuser', create);
}

export default user_routes;