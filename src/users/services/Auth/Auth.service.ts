import { Inject, Injectable, NotFoundException } from "@nestjs/common";
import { Model } from "mongoose";
import { signInDto, signUpDto } from "src/users/dto/Auth/AuthDto.dto";
import { Users } from "src/users/intefaces/users.interface";
import * as bcrypt from 'bcrypt';
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService{
    constructor(
        @Inject('USER_MODEL') 
        private usersModel:Model<Users>,
        private jwtService:JwtService){}

    async signIn(body:signInDto){
        const{email ,password}=body;
        const user = await this.usersModel.findOne({email});
        if(!user){
            throw new NotFoundException;
        }
        const hashPassword = user.password;
        const isMatch = await bcrypt.compare(password,hashPassword);
        if(!isMatch){
            throw new NotFoundException();
        }

        //genrate token
        const payload = {
            email:user.email,
            role:user.role
        }
        const token = await this.jwtService.sign(payload,{secret:process.env.JWT_SECRET});


        return {
            data:user, token
        };
        
    };



    async signUp(body:signUpDto){
        const saltOrRounds = 10;
        const password = await bcrypt.hash(body.password,saltOrRounds);
        const newUser={
            firstName:body.firstName,
            lastName:body.lastName,
            email:body.email,
            password,
            role:"user",
        };

        const user = await this.usersModel.create(newUser);
              //genrate token
              const payload = {
                email:user.email,
                role:user.role
            }
            const token = await this.jwtService.sign(payload,{secret:process.env.JWT_SECRET});
        return {data:user,token};
    };
}