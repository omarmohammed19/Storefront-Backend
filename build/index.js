"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var usersHandler_1 = __importDefault(require("./Handlers/usersHandler"));
var productsHandler_1 = __importDefault(require("./Handlers/productsHandler"));
var dashboardHandler_1 = __importDefault(require("./Handlers/dashboardHandler"));
var ordersHandler_1 = __importDefault(require("./Handlers/ordersHandler"));
var app = (0, express_1.default)();
var address = 'localhost';
dotenv_1.default.config();
app.use(body_parser_1.default.json());
(0, usersHandler_1.default)(app);
(0, productsHandler_1.default)(app);
(0, dashboardHandler_1.default)(app);
(0, ordersHandler_1.default)(app);
app.listen(3000, function () {
    console.log("Server running on port http://".concat(address, ":3000/"));
});
exports.default = app;
