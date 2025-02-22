import { IsEmail, IsNotEmpty, IsString } from "class-validator";


export class CreateUserDTO {

    @IsNotEmpty()
    @IsString()
    firstName!: string;

    @IsNotEmpty()
    @IsString()
    lastName!: string;

    @IsNotEmpty()
    age!: number;

    @IsNotEmpty()
    @IsEmail()
    email!: string;

}