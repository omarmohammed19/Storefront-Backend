"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ordersModel_1 = require("../../Models/ordersModel");
var supertest_1 = __importDefault(require("supertest"));
var __1 = __importDefault(require("../.."));
var request = (0, supertest_1.default)(__1.default);
var makeorder = new ordersModel_1.OrderStore();
describe("OrderStore", function () {
    describe("Create function Tests", function () {
        it("checks if the function exists", function () { return __awaiter(void 0, void 0, void 0, function () {
            var order;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, makeorder.create({
                            status: "pending",
                            user_id: 1,
                        })];
                    case 1:
                        order = _a.sent();
                        expect(order).toBeDefined();
                        return [2 /*return*/];
                }
            });
        }); });
        it("should return an order", function () { return __awaiter(void 0, void 0, void 0, function () {
            var order;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, makeorder.create({
                            status: "pending",
                            user_id: 1,
                        })];
                    case 1:
                        order = _a.sent();
                        expect(order).toBeInstanceOf(Object);
                        return [2 /*return*/];
                }
            });
        }); });
        it('checks that the function doesn\'t throw errors', function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                expect(function () { return __awaiter(void 0, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, makeorder.create({
                                    status: "pending",
                                    user_id: 1,
                                })];
                            case 1:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); }).not.toThrow();
                return [2 /*return*/];
            });
        }); });
    });
    describe("Index function Tests", function () {
        it("checks if the function exists", function () { return __awaiter(void 0, void 0, void 0, function () {
            var order;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, makeorder.index()];
                    case 1:
                        order = _a.sent();
                        expect(order).toBeDefined();
                        return [2 /*return*/];
                }
            });
        }); });
        it('checks that the function doesn\'t throw errors', function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                expect(function () { return __awaiter(void 0, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, makeorder.index()];
                            case 1:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); }).not.toThrow();
                return [2 /*return*/];
            });
        }); });
    });
    describe("Current Order function Tests", function () {
        it("checks if the function exists", function () { return __awaiter(void 0, void 0, void 0, function () {
            var order;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, makeorder.getcurrentorder(1)];
                    case 1:
                        order = _a.sent();
                        expect(order).toBeDefined();
                        return [2 /*return*/];
                }
            });
        }); });
        it("should return an order", function () { return __awaiter(void 0, void 0, void 0, function () {
            var order;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, makeorder.getcurrentorder(1)];
                    case 1:
                        order = _a.sent();
                        expect(order).toBeInstanceOf(Object);
                        return [2 /*return*/];
                }
            });
        }); });
        it('checks that the function doesn\'t throw errors', function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                expect(function () { return __awaiter(void 0, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, makeorder.getcurrentorder(1)];
                            case 1:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); }).not.toThrow();
                return [2 /*return*/];
            });
        }); });
    });
    describe("Add product function Tests", function () {
        it("checks if the function exists", function () { return __awaiter(void 0, void 0, void 0, function () {
            var order;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, makeorder.addproduct(1, 1, 1)];
                    case 1:
                        order = _a.sent();
                        expect(order).toBeDefined();
                        return [2 /*return*/];
                }
            });
        }); });
        it("should return an order", function () { return __awaiter(void 0, void 0, void 0, function () {
            var order;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, makeorder.addproduct(1, 1, 1)];
                    case 1:
                        order = _a.sent();
                        expect(order).toBeInstanceOf(Object);
                        return [2 /*return*/];
                }
            });
        }); });
        it('checks that the function doesn\'t throw errors', function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                expect(function () { return __awaiter(void 0, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, makeorder.addproduct(1, 1, 1)];
                            case 1:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); }).not.toThrow();
                return [2 /*return*/];
            });
        }); });
    });
    describe("Test get product endpoint", function () {
        it("should return a 200 ", function () { return __awaiter(void 0, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, request.get("/api/orders").set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImZpcnN0bmFtZSI6Im9tYXIiLCJsYXN0bmFtZSI6Im1vaGFtbWVkIiwicGFzc3dvcmRfZGlnZXN0Ijoib21lcjEyMzQifSwiaWF0IjoxNjQ5MTk2Mzc4fQ.MpO2APHlqyahBwH8bFU-iO2U1t940ZdGdIUc8RXClSA')];
                    case 1:
                        res = _a.sent();
                        expect(res.status).toBe(200);
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe("Test get current product endpoint", function () {
        it("should return a 200 ", function () { return __awaiter(void 0, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, request.get("/api/orders/1").set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImZpcnN0bmFtZSI6Im9tYXIiLCJsYXN0bmFtZSI6Im1vaGFtbWVkIiwicGFzc3dvcmRfZGlnZXN0Ijoib21lcjEyMzQifSwiaWF0IjoxNjQ5MTk2Mzc4fQ.MpO2APHlqyahBwH8bFU-iO2U1t940ZdGdIUc8RXClSA')];
                    case 1:
                        res = _a.sent();
                        expect(res.status).toBe(200);
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe("Test create product endpoint", function () {
        it("should return a 200 ", function () { return __awaiter(void 0, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, request.post("/api/createorders").send({
                            status: "pending",
                            user_id: 1,
                        }).set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImZpcnN0bmFtZSI6Im9tYXIiLCJsYXN0bmFtZSI6Im1vaGFtbWVkIiwicGFzc3dvcmRfZGlnZXN0Ijoib21lcjEyMzQifSwiaWF0IjoxNjQ5MTk2Mzc4fQ.MpO2APHlqyahBwH8bFU-iO2U1t940ZdGdIUc8RXClSA')];
                    case 1:
                        res = _a.sent();
                        expect(res.status).toBe(200);
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe("Test add product endpoint", function () {
        it("should return a 200 ", function () { return __awaiter(void 0, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, request.post("/api/orders/1/products").send({
                            product_id: 1,
                            quantity: 1,
                        }).set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImZpcnN0bmFtZSI6Im9tYXIiLCJsYXN0bmFtZSI6Im1vaGFtbWVkIiwicGFzc3dvcmRfZGlnZXN0Ijoib21lcjEyMzQifSwiaWF0IjoxNjQ5MTk2Mzc4fQ.MpO2APHlqyahBwH8bFU-iO2U1t940ZdGdIUc8RXClSA')];
                    case 1:
                        res = _a.sent();
                        expect(res.status).toBe(200);
                        return [2 /*return*/];
                }
            });
        }); });
    });
});