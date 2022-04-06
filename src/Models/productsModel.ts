import dotenv from 'dotenv';
// @ts-ignore
import client from "../database";

dotenv.config();

export type product = {
    id?: number,
    name: string,
    price: number
}

export class productStore {
    async index(): Promise<product[]> {
        try {
            //@ts-ignore
            const con = await client.connect();
            const sql = 'SELECT * from products;';
            const result = await con.query(sql);
            con.release();
            return result.rows[0];
        } catch (error) {
            throw new Error(`Could not get products ${error}`);
        }
    }

    async create(product: product): Promise<product> {
        try {
            //@ts-ignore
            const con = await client.connect();
            const sql = 'INSERT INTO products (name, price) VALUES ($1, $2) RETURNING *;';
            const result = await con.query(sql, [product.name, product.price]);
            con.release();
            return result.rows[0];
        } catch (error) {
            throw new Error(`Could not create product ${error}`);
        }
    }

    async show(id: number): Promise<product> {
        try {
            //@ts-ignore
            const con = await client.connect();
            const sql = 'SELECT * from products WHERE id = $1;';
            const result = await con.query(sql, [id]);
            con.release();
            return result.rows[0];
        } catch (error) {
            throw new Error(`Could not get product ${error}`);
        }
    }

}