import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CustomerService } from './customer/customer.service';
import { CustomerController } from './customer/customer.controller';
import { CustomerSchema } from './schema/customer.schema';

@Module({
  
  imports: [MongooseModule.forRoot('mongodb+srv://nockles:boiJHsa69MWfA1AJ@cluster0.yyegsl4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',{dbName: 'customerdb'}),
  MongooseModule.forFeature([{ name: 'Customer', schema: CustomerSchema}])],
  controllers: [AppController, CustomerController],
  providers: [AppService, CustomerService],
})
export class AppModule {}
