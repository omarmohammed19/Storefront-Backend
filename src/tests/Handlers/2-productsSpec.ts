import { productStore } from "../../Models/productsModel";
import supertest from "supertest";
import app from "../..";

const request = supertest(app);
const makeproduct = new productStore();

describe("ProductStore", () => {
    describe("Index function Tests", () => {
        it('checks that the function doesn\'t throw errors', async (): Promise<void> => {
            expect(async () => {
                await makeproduct.index();
            }).not.toThrow();
        });
    });
    describe("Create function Tests", () => {
        it("checks if the function exists", async (): Promise<void> => {
            const product = await makeproduct.create({
                name: "test",
                price: 50
            });
            expect(product).toBeDefined();
        });

        it("should return a product", async (): Promise<void> => {
            const product = await makeproduct.create({
                name: "test",
                price: 50
            });
            expect(product).toBeInstanceOf(Object);
        });

        it('checks that the function doesn\'t throw errors', async (): Promise<void> => {
            expect(async () => {
                await makeproduct.create({
                    name: "test",
                    price: 50
                });
            }).not.toThrow();
        });
    });
    describe("Show function Tests", () => {
        it("checks if the function exists", async (): Promise<void> => {
            const product = await makeproduct.show(1);
            expect(product).toBeDefined();
        });

        it("should return a product", async (): Promise<void> => {
            const product = await makeproduct.show(1);
            expect(product).toBeInstanceOf(Object);
        });

        it('checks that the function doesn\'t throw errors', async (): Promise<void> => {
            expect(async () => {
                await makeproduct.show(1);
            }).not.toThrow();
        });
    });

    describe("Endpoint Tests", () => {
        it("should return a product", async (): Promise<void> => {
            const res = await request.post("/api/createproduct").send({
                name: "test",
                price: 50
            }).set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImZpcnN0bmFtZSI6Im9tYXIiLCJsYXN0bmFtZSI6Im1vaGFtbWVkIiwicGFzc3dvcmRfZGlnZXN0Ijoib21lcjEyMzQifSwiaWF0IjoxNjQ5MTk2Mzc4fQ.MpO2APHlqyahBwH8bFU-iO2U1t940ZdGdIUc8RXClSA');
            expect(res.status).toBe(200);
        });
        it("should return all products", async (): Promise<void> => {
            const res = await request.get("/api/products");
            expect(res.status).toBe(200);
        });

        it("should return a product", async (): Promise<void> => {
            const res = await request.get("/api/products/1");
            expect(res.status).toBe(200);
        });
    });
});


