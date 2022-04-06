import dotenv from 'dotenv';
// @ts-ignore
import client from "../database";

dotenv.config();

export type order = {
    id?: number,
    status: string,
    user_id: number
}

export class OrderStore {
    async index(): Promise<order[]> {
        try {
            //@ts-ignore
            const con = await client.connect();
            const sql = 'SELECT * from orders;';
            const result = await con.query(sql);
            con.release();
            return result.rows[0];
        } catch (error) {
            throw new Error(`Could not get orders ${error}`);
        }
    }

    async create(order: order): Promise<order> {
        try {
            //@ts-ignore
            const con = await client.connect();
            const sql = 'INSERT INTO orders (status, user_id) VALUES ($1, $2) RETURNING *;';
            const result = await con.query(sql, [order.status, order.user_id]);
            con.release();
            return result.rows[0];
        } catch (error) {
            throw new Error(`Could not create order ${error}`);
        }
    }

    async addproduct(id: number, product_id: number, quantity: number): Promise<order> {
        try {
            //@ts-ignore
            const con = await client.connect();
            const sql = 'INSERT INTO order_products (order_id, product_id,quantity) VALUES ($1, $2,$3) RETURNING *;';
            const result = await con.query(sql, [id, product_id, quantity]);
            con.release();
            return result.rows[0];
        } catch (error) {
            throw new Error(`Could not add product to order ${error}`);
        }
    }

    async getcurrentorder(user_id: number): Promise<order> {
        try {
            //@ts-ignore
            const con = await client.connect();
            const sql = 'SELECT * FROM orders WHERE user_id = $1 AND status = \'pending\';';
            const result = await con.query(sql, [user_id]);
            con.release();
            return result.rows[0];
        } catch (error) {
            throw new Error(`Could not get current order ${error}`);
        }
    }
}