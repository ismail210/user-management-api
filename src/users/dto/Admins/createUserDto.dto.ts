import { IsEmail, IsEnum, IsString, MaxLength, MinLength } from "class-validator";


export class createUserDto{
    @IsString({message:"firstname must be string"})
    @MinLength(3,{message:"first name at least 3 char"})
    firstName:string;

    @IsString({message:"lastname must be string"})
    @MinLength(3,{message:"last name at least 3 char"})
    lastName:string;

    @IsString({message:"emailmust be string"})
    @IsEmail()
    email:string;
    @MinLength(5,{message:'pass must be at least 5 char'})
    @MaxLength(20,{message:'pass must be less than 20 char'})
    @IsString({message:'password must be string'})
    password:string;

    @IsEnum(['user','admin','manager'],{message:'role must be user or admin or manager'})
    role:string;
}