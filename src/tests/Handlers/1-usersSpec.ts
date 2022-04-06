import supertest from "supertest";
import { UserStore } from "../../Models/usersModel";
import app from "../..";

const makeuser = new UserStore();
const request = supertest(app);

describe("UserStore", () => {
    describe("Index function Tests", () => {
        it("checks if the function exists", async (): Promise<void> => {
            const user = await makeuser.index();
            expect(user).toBeDefined();
        });

        it("should return an array of users", async (): Promise<void> => {
            const users = await makeuser.index();
            expect(users).toBeInstanceOf(Array);
        });

        it('checks that the function doesn\'t throw errors', async (): Promise<void> => {
            expect(async () => {
                await await makeuser.index();
            }).not.toThrow();
        });
    });
    describe("Create function Tests", () => {
        it("checks if the function exists", async (): Promise<void> => {
            const user = await makeuser.create({
                firstname: "test",
                lastname: "test",
                password_digest: "test"
            });
            expect(user).toBeDefined();
        });

        it("should return a user", async (): Promise<void> => {
            const user = await makeuser.create({
                firstname: "test",
                lastname: "test",
                password_digest: "test"
            });
            expect(user).toBeInstanceOf(Object);
        });

        it('checks if the user password is not stored as it is in database', async (): Promise<void> => {
            const result = await makeuser.create({
                firstname: "test",
                lastname: "test",
                password_digest: "test"
            });
            expect(result).not.toEqual({
                firstname: "test",
                lastname: "test",
                password_digest: "test"
            });
        });
        it('checks that the function doesn\'t throw errors', async (): Promise<void> => {
            const user = {
                firstname: "test",
                lastname: "test",
                password_digest: "test"
            };
            expect(async () => {
                await await makeuser.create(user);
            }).not.toThrow();
        });
    });

    describe("Show function Tests", () => {
        it("checks if the function exists", async (): Promise<void> => {
            const user = await makeuser.show(1);
            expect(user).toBeDefined();
        });
        it("should return a user", async (): Promise<void> => {
            const user = await makeuser.show(1);
            expect(user).toBeInstanceOf(Object);
        });
        it('checks that the function doesn\'t throw errors', async (): Promise<void> => {
            expect(async () => {
                await await makeuser.show(1);
            }).not.toThrow();
        });
    });

    describe("Test Get Users Endpoint", () => {
        it("checks the endpoint status", async (): Promise<void> => {
            const response = await request.get('/users').set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImZpcnN0bmFtZSI6Im9tYXIiLCJsYXN0bmFtZSI6Im1vaGFtbWVkIiwicGFzc3dvcmRfZGlnZXN0Ijoib21lcjEyMzQifSwiaWF0IjoxNjQ5MTk2Mzc4fQ.MpO2APHlqyahBwH8bFU-iO2U1t940ZdGdIUc8RXClSA');
            expect(response.statusCode).toBe(200);
        });
    });

    describe("Test Show User Endpoint", () => {
        it("checks the endpoint status", async (): Promise<void> => {
            const response = await request.get('/users/1').set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImZpcnN0bmFtZSI6Im9tYXIiLCJsYXN0bmFtZSI6Im1vaGFtbWVkIiwicGFzc3dvcmRfZGlnZXN0Ijoib21lcjEyMzQifSwiaWF0IjoxNjQ5MTk2Mzc4fQ.MpO2APHlqyahBwH8bFU-iO2U1t940ZdGdIUc8RXClSA');
            expect(response.statusCode).toBe(200);
        });
    });

    describe("Test Create User Endpoint", () => {
        it("checks the endpoint status", async (): Promise<void> => {
            const response = await request.post('/createuser').send({
                firstname: "test",
                lastname: "test",
                password_digest: "test",
            }).set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImZpcnN0bmFtZSI6Im9tYXIiLCJsYXN0bmFtZSI6Im1vaGFtbWVkIiwicGFzc3dvcmRfZGlnZXN0Ijoib21lcjEyMzQifSwiaWF0IjoxNjQ5MTk2Mzc4fQ.MpO2APHlqyahBwH8bFU-iO2U1t940ZdGdIUc8RXClSA');
            expect(response.statusCode).toBe(200);
        });
    });
});