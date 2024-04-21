import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateCustomerDto } from 'src/dto/create-customer.dto';
import { Model } from 'mongoose';
import { Customer } from 'src/schema/customer.schema';

@Injectable()
export class CustomerService {
    constructor(@InjectModel('Customer') private customerModel:Model<Customer>) { }

    async createCustomer(createCustomerDto: CreateCustomerDto): Promise<Customer>{
        const newCustomer = await new this.customerModel(createCustomerDto);
        return newCustomer.save();
    }
    
    async getAllCustomers(): Promise<Customer[]> {
        const customerData = await this.customerModel.find();
        if (!customerData || customerData.length == 0) {
            throw new NotFoundException('Customers data not found!');
        }
        return customerData;
    }
}
