import { OrderStore } from "../../Models/ordersModel";
import supertest from "supertest";
import app from "../..";

const request = supertest(app);
const makeorder = new OrderStore();

describe("OrderStore", () => {
    describe("Create function Tests", () => {
        it("checks if the function exists", async (): Promise<void> => {
            const order = await makeorder.create({
                status: "pending",
                user_id: 1,
            });
            expect(order).toBeDefined();
        });

        it("should return an order", async (): Promise<void> => {
            const order = await makeorder.create({
                status: "pending",
                user_id: 1,
            });
            expect(order).toBeInstanceOf(Object);
        });

        it('checks that the function doesn\'t throw errors', async (): Promise<void> => {
            expect(async () => {
                await makeorder.create({
                    status: "pending",
                    user_id: 1,
                });
            }).not.toThrow();
        });
    });
    describe("Index function Tests", () => {
        it("checks if the function exists", async (): Promise<void> => {
            const order = await makeorder.index();
            expect(order).toBeDefined();
        });

        it('checks that the function doesn\'t throw errors', async (): Promise<void> => {
            expect(async () => {
                await makeorder.index();
            }).not.toThrow();
        });
    });
    describe("Current Order function Tests", () => {
        it("checks if the function exists", async (): Promise<void> => {
            const order = await makeorder.getcurrentorder(1);
            expect(order).toBeDefined();
        });

        it("should return an order", async (): Promise<void> => {
            const order = await makeorder.getcurrentorder(1);
            expect(order).toBeInstanceOf(Object);
        });

        it('checks that the function doesn\'t throw errors', async (): Promise<void> => {
            expect(async () => {
                await makeorder.getcurrentorder(1);
            }).not.toThrow();
        });
    });

    describe("Add product function Tests", () => {
        it("checks if the function exists", async (): Promise<void> => {
            const order = await makeorder.addproduct(1, 1, 1);
            expect(order).toBeDefined();
        });

        it("should return an order", async (): Promise<void> => {
            const order = await makeorder.addproduct(1, 1, 1);
            expect(order).toBeInstanceOf(Object);
        });

        it('checks that the function doesn\'t throw errors', async (): Promise<void> => {
            expect(async () => {
                await makeorder.addproduct(1, 1, 1);
            }).not.toThrow();
        });
    });

    describe("Test get product endpoint", () => {
        it("should return a 200 ", async (): Promise<void> => {
            const res = await request.get("/api/orders").set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImZpcnN0bmFtZSI6Im9tYXIiLCJsYXN0bmFtZSI6Im1vaGFtbWVkIiwicGFzc3dvcmRfZGlnZXN0Ijoib21lcjEyMzQifSwiaWF0IjoxNjQ5MTk2Mzc4fQ.MpO2APHlqyahBwH8bFU-iO2U1t940ZdGdIUc8RXClSA');
            expect(res.status).toBe(200);
        });
    });
    describe("Test get current product endpoint", () => {
        it("should return a 200 ", async (): Promise<void> => {
            const res = await request.get("/api/orders/1").set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImZpcnN0bmFtZSI6Im9tYXIiLCJsYXN0bmFtZSI6Im1vaGFtbWVkIiwicGFzc3dvcmRfZGlnZXN0Ijoib21lcjEyMzQifSwiaWF0IjoxNjQ5MTk2Mzc4fQ.MpO2APHlqyahBwH8bFU-iO2U1t940ZdGdIUc8RXClSA');
            expect(res.status).toBe(200);
        });
    });
    describe("Test create product endpoint", () => {
        it("should return a 200 ", async (): Promise<void> => {
            const res = await request.post("/api/createorders").send({
                status: "pending",
                user_id: 1,
            }).set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImZpcnN0bmFtZSI6Im9tYXIiLCJsYXN0bmFtZSI6Im1vaGFtbWVkIiwicGFzc3dvcmRfZGlnZXN0Ijoib21lcjEyMzQifSwiaWF0IjoxNjQ5MTk2Mzc4fQ.MpO2APHlqyahBwH8bFU-iO2U1t940ZdGdIUc8RXClSA');
            expect(res.status).toBe(200);
        });
    });
    describe("Test add product endpoint", () => {
        it("should return a 200 ", async (): Promise<void> => {
            const res = await request.post("/api/orders/1/products").send({
                product_id: 1,
                quantity: 1,
            }).set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImZpcnN0bmFtZSI6Im9tYXIiLCJsYXN0bmFtZSI6Im1vaGFtbWVkIiwicGFzc3dvcmRfZGlnZXN0Ijoib21lcjEyMzQifSwiaWF0IjoxNjQ5MTk2Mzc4fQ.MpO2APHlqyahBwH8bFU-iO2U1t940ZdGdIUc8RXClSA');
            expect(res.status).toBe(200);
        });
    });
});
