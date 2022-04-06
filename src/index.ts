import dotenv from 'dotenv';
import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import user_routes from './Handlers/usersHandler';
import product_routes from './Handlers/productsHandler';
import dashboard_router from './Handlers/dashboardHandler';
import order_routes from './Handlers/ordersHandler';

const app: express.Application = express();
const address: string = 'localhost';

dotenv.config();

app.use(bodyParser.json());
user_routes(app);
product_routes(app);
dashboard_router(app);
order_routes(app);


app.listen(3000, function () {
    console.log(`Server running on port http://${address}:3000/`);
});

export default app;