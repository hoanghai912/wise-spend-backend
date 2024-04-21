import { Body, Controller, Get, HttpStatus, Post, Res, Delete, Param, Put } from '@nestjs/common';
import { CreateCustomerDto } from 'src/dto/create-customer.dto';
import { CustomerService } from './customer.service';
import { response } from 'express';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('customer')
@ApiTags('customers')
export class CustomerController {
    constructor(private readonly customerService: CustomerService) { }

    @Post()
    @ApiResponse({status: 201, description: 'Created successfully'})
    @ApiResponse({status: 400, description: 'Bad Request'})
    @ApiOperation({
		summary: 'Create new customer',
		description: `API to create new customer depending on the request body.`,
	})
    async createCustomer(@Res() response, @Body() createCustomerDto: CreateCustomerDto) {
        try {
            const newCustomer = await this.customerService.createCustomer(createCustomerDto);
            return response.status(HttpStatus.CREATED).json({
                message: 'Customer has been created successfully',newCustomer,});
        } catch (err) {
            return response.status(HttpStatus.BAD_REQUEST).json({
                statusCode: 400,
                message: 'Error: Customer not created!',
                error: 'Bad Request'
            });
        }
    }

    @Get()
    @ApiResponse({status: 200, description: 'Get all customers successfully'})
    @ApiResponse({status: 404, description: 'Bad Request'})
    @ApiOperation({
        summary: 'Get all customers',
        description: `API to get all customers.`,
    })
    async getCustomers(@Res() response) {
        try {
            const customerData = await this.customerService.getAllCustomers();
            return response.status(HttpStatus.OK).json({
                message: 'All customers data found successfully',customerData,});
        } catch (err) {
            return response.status(err.status).json(err.response);
        }
    }
}
