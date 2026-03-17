import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Users } from '../../intefaces/users.interface';
import { Model } from 'mongoose';
import { createUserDto } from '../../dto/Admins/createUserDto.dto';
import { updateUserDto } from 'src/users/dto/Admins/updateUserDto.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UsersService {
    constructor(
        @Inject('USER_MODEL')
        private userModel: Model<Users>,
        private jwtService:JwtService
      ) {}

    getAllUsers():Promise<Users []>{
        return this.userModel.find();
    }
    
    async getUserById(userId:string):Promise<Users|null >{
        const user =await this.userModel.findById(userId).select("-_id firstName lastName email");
        if(!user){
            throw new NotFoundException();
        }
        return user;
    } 

    async createUser(body:createUserDto):Promise<Users|null >{
        // const user = this.userModel.create(body);
        // return user;
        const saltOrRounds = 10;
        const password = await bcrypt.hash(body.password,saltOrRounds);
        const newUser={
            firstName:body.firstName,
            lastName:body.lastName,
            email:body.email,
            password,
            role:body.role,
        };

        const user = await this.userModel.create(newUser);
              //genrate token
              const payload = {
                email:user.email,
                role:user.role
            }
            const token = await this.jwtService.sign(payload,{secret:process.env.JWT_SECRET});
        return user;
    } 

    async updateUser(userId: string, body: updateUserDto):Promise<Users|null >{
        const user =await this.userModel.findByIdAndUpdate(userId,body,{
            new:true,
        }).select("-_id firstName lastName email");
        if(!user){
            throw new NotFoundException();
        }
        return user;
    } 

    async deleteUser(userId: string):Promise<void>{
        const user =await this.userModel.findByIdAndDelete(userId);
        if(!user){
            throw new NotFoundException();
        }
        return;
    }
}

