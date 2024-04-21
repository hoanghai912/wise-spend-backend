"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerController = void 0;
const common_1 = require("@nestjs/common");
const create_customer_dto_1 = require("../dto/create-customer.dto");
const customer_service_1 = require("./customer.service");
const swagger_1 = require("@nestjs/swagger");
let CustomerController = class CustomerController {
    constructor(customerService) {
        this.customerService = customerService;
    }
    async createCustomer(response, createCustomerDto) {
        try {
            const newCustomer = await this.customerService.createCustomer(createCustomerDto);
            return response.status(common_1.HttpStatus.CREATED).json({
                message: 'Customer has been created successfully', newCustomer,
            });
        }
        catch (err) {
            return response.status(common_1.HttpStatus.BAD_REQUEST).json({
                statusCode: 400,
                message: 'Error: Customer not created!',
                error: 'Bad Request'
            });
        }
    }
    async getCustomers(response) {
        try {
            const customerData = await this.customerService.getAllCustomers();
            return response.status(common_1.HttpStatus.OK).json({
                message: 'All customers data found successfully', customerData,
            });
        }
        catch (err) {
            return response.status(err.status).json(err.response);
        }
    }
};
exports.CustomerController = CustomerController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Created successfully' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad Request' }),
    (0, swagger_1.ApiOperation)({
        summary: 'Create new customer',
        description: `API to create new customer depending on the request body.`,
    }),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_customer_dto_1.CreateCustomerDto]),
    __metadata("design:returntype", Promise)
], CustomerController.prototype, "createCustomer", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Get all customers successfully' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Bad Request' }),
    (0, swagger_1.ApiOperation)({
        summary: 'Get all customers',
        description: `API to get all customers.`,
    }),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CustomerController.prototype, "getCustomers", null);
exports.CustomerController = CustomerController = __decorate([
    (0, common_1.Controller)('customer'),
    (0, swagger_1.ApiTags)('customers'),
    __metadata("design:paramtypes", [customer_service_1.CustomerService])
], CustomerController);
//# sourceMappingURL=customer.controller.js.map