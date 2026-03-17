import { IsEmail, IsString, MaxLength, MinLength } from "class-validator";

export class signInDto{
    @IsString({message:'email must be string'})
    @IsEmail({},{message:'emailt must be valid'})
    
    email:string;
    @MinLength(5,{message:'pass must be at least 5 char'})
    @MaxLength(20,{message:'pass must be less than 20 char'})
    @IsString({message:'password must be string'})
    password:string;
}

export class signUpDto{
    @IsString({message:'email must be string'})
    @IsEmail({},{message:'emailt must be valid'})
    
    email:string;

    @MinLength(5,{message:'pass must be at least 5 char'})
    @MaxLength(20,{message:'pass must be less than 20 char'})
    @IsString({message:'password must be string'})
    password:string;

    @IsString({message:'first name must be string'})
    firstName:string;

    @IsString({message:'last name must be string'})
    lastName:string;
}