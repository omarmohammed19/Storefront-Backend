import { dashboardStore } from "../../Services/dashboard";
import supertest from "supertest";
import app from "../..";

const request = supertest(app);
const makedashboard = new dashboardStore();

describe("DashboardStore", () => {
    describe("get5popular function Tests", () => {
        it("checks if the function exists", async (): Promise<void> => {
            const products = await makedashboard.get5popular();
            expect(products).toBeDefined();
        });

        it("should return an array of products", async (): Promise<void> => {
            const products = await makedashboard.get5popular();
            expect(products).toBeInstanceOf(Array);
        });

        it('checks that the function doesn\'t throw errors', async (): Promise<void> => {
            expect(async () => {
                await makedashboard.get5popular();
            }).not.toThrow();
        });
    });

    describe("get5popular endpoint test", () => {
        it("should return an array of products", async (): Promise<void> => {
            const response = await request.get("/api/dashboard/popular");
            expect(response.status).toBe(200);
            expect(response.body).toBeInstanceOf(Array);
        });
    });
});

