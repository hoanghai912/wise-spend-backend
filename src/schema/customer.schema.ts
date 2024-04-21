import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type CustenetDocument = HydratedDocument<Customer>;

@Schema()
export class Customer{
    @Prop({required: true})
    name: string;
    @Prop({required: true, unique: true})
    email: string;
    @Prop({required:false})
    phone: string;
    
}

export const CustomerSchema = SchemaFactory.createForClass(Customer);