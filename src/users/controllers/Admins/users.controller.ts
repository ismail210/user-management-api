import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards, ValidationPipe } from '@nestjs/common';
import { UsersService } from '../../services/Admins/users.service';
import { createUserDto } from '../../dto/Admins/createUserDto.dto';
import { Roles } from '../../guards/Roles.decorator';
import { updateUserDto } from 'src/users/dto/Admins/updateUserDto.dto';
import { UsersGuard } from 'src/users/guards/users.guard';

@Controller('users')
@UseGuards(UsersGuard)
export class UserController {
    constructor(private readonly usersService:UsersService){}
  //==============================================================//
  //@Desc Get All Users
  //@Route Get/users
  //@Acces private[admin,manager]
  @Roles(['admin','manager'])
  @Get()
  getAllUsers(){
    return this.usersService.getAllUsers()
  }  //JWT+Roles+Guards =SECURITY
  //==============================================================//

  //@Desc Get User by id
  //@Route Get/users
  //@Acces private[admin,manager]
  @Roles(['admin','manager'])
  @Get(':userId')
  getUserById(@Param('userId') userId:string){
    return this.usersService.getUserById(userId);
  }  
  //==============================================================//

  //@Desc Add user
  //@Route Post/users
  //@Acces private[admin,manager]
  @Roles(['admin','manager'])
  @Post()
  createUser(@Body(new ValidationPipe({whitelist:true , forbidNonWhitelisted:true})) body : createUserDto){
    return this.usersService.createUser(body);
  }  
  //==============================================================//

  //@Desc update user bu id
  //@Route Patch/users/id
  //@Acces private[admin,manager]
  @Roles(['admin','manager'])
  @Patch(':userId')
  updateUser(@Param('userId') userId:string,
  @Body(new ValidationPipe({whitelist:true , forbidNonWhitelisted:true})) 
  body : updateUserDto){
    return this.usersService.updateUser(userId,body);
  }  
  //==============================================================//

  //@Desc delete user bu id
  //@Route Delete/users/id
  //@Acces private[admin,manager]
  @Roles(['admin','manager'])
  @Delete(':userId')
  deleteUser(@Param('userId') userId:string)
  {
    return this.usersService.deleteUser(userId);
  }  
  //==============================================================//
}
