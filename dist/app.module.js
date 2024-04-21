"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const mongoose_1 = require("@nestjs/mongoose");
const customer_service_1 = require("./customer/customer.service");
const customer_controller_1 = require("./customer/customer.controller");
const customer_schema_1 = require("./schema/customer.schema");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forRoot('mongodb+srv://nockles:boiJHsa69MWfA1AJ@cluster0.yyegsl4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', { dbName: 'customerdb' }),
            mongoose_1.MongooseModule.forFeature([{ name: 'Customer', schema: customer_schema_1.CustomerSchema }])],
        controllers: [app_controller_1.AppController, customer_controller_1.CustomerController],
        providers: [app_service_1.AppService, customer_service_1.CustomerService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map