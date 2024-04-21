import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, MaxLength, IsString, IsNumber } from "class-validator";

export class CreateCustomerDto {
    @ApiProperty()
    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    readonly name: string;

    @ApiProperty()
    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    readonly email: string;
    
    @ApiProperty()
    @IsString()
    @MaxLength(30)
    readonly phone: string;
}