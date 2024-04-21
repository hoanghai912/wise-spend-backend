import { CreateCustomerDto } from 'src/dto/create-customer.dto';
import { CustomerService } from './customer.service';
export declare class CustomerController {
    private readonly customerService;
    constructor(customerService: CustomerService);
    createCustomer(response: any, createCustomerDto: CreateCustomerDto): Promise<any>;
    getCustomers(response: any): Promise<any>;
}
