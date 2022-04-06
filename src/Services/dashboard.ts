//@ts-ignore
import client from "../database";

export class dashboardStore {
    async get5popular() {
        try {
            //@ts-ignore
            const con = await client.connect();
            const sql = `SELECT name, SUM(quantity) AS Most_Popular FROM order_products inner join products ON order_products.product_id = products.id GROUP BY name ORDER BY Most_Popular DESC LIMIT 5`;
            const result = await con.query(sql);
            con.release();
            return result.rows;
        } catch (error) {
            throw new Error(`Could not get popular products ${error}`);
        }
    }
}