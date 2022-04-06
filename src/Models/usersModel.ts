import dotenv from 'dotenv';
//@ts-ignore
import client from '../database';
import bcrypt from 'bcrypt';

dotenv.config();

const {
    pepper,
    SALT_ROUNDS
} = process.env

export type User = {
    id?: number,
    firstname: string,
    lastname: string,
    password_digest: string
}

export class UserStore {
    async index(): Promise<User[]> {
        try {
            //@ts-ignore
            const con = await client.connect();
            const sql = 'SELECT * from users;';
            const result = await con.query(sql);
            con.release();
            return result.rows;
        } catch (error) {
            throw new Error(`Could not get users ${error}`);
        }
    }

    async create(user: User): Promise<User> {
        try {
            //@ts-ignore
            const con = await client.connect();
            const sql = 'INSERT INTO users (firstname, lastname, password_digest) VALUES ($1, $2, $3) RETURNING *;';
            const hash = bcrypt.hashSync(user.password_digest + pepper,
                //@ts-ignore
                parseInt(SALT_ROUNDS));
            const result = await con.query(sql, [user.firstname, user.lastname, hash]);
            con.release();
            return result.rows[0];
        } catch (error) {
            throw new Error(`Could not create user ${error}`);
        }
    }

    async show(id: number): Promise<User> {
        try {
            //@ts-ignore
            const con = await client.connect();
            const sql = 'SELECT * from users WHERE id = $1;';
            const result = await con.query(sql, [id]);
            con.release();
            return result.rows[0];
        } catch (error) {
            throw new Error(`Could not get user ${error}`);
        }
    }
}