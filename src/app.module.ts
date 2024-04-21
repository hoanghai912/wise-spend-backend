import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CustomerService } from './customer/customer.service';
import { CustomerController } from './customer/customer.controller';
import { CustomerSchema } from './schema/customer.schema';

@Module({
  imports: [MongooseModule.forRoot('mongodb://127.0.0.1:27017',{dbName: 'customerdb'}),
  MongooseModule.forFeature([{ name: 'Customer', schema: CustomerSchema}])],
  controllers: [AppController, CustomerController],
  providers: [AppService, CustomerService],
})
export class AppModule {}
