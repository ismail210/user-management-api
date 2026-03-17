import { Body, Controller, Post, UseGuards, ValidationPipe } from "@nestjs/common";
import { signInDto, signUpDto } from "src/users/dto/Auth/AuthDto.dto";
import { Roles } from "src/users/guards/Roles.decorator";
import { UsersGuard } from "src/users/guards/users.guard";
import { AuthService } from "src/users/services/Auth/Auth.service";


@Controller('sign-in')
export class AuthSignInController{
    constructor(private readonly authService:AuthService){}

    //===========================================//
    //Desc can anu user sign in
    //Route Post/sign-in
    //Access private['admin','manager','user']
    @Post()
    signIn(@Body(new ValidationPipe({whitelist:true,forbidNonWhitelisted:true}))
            body:signInDto){
        return this.authService.signIn(body);
    }}

    //===========================================//
    //Desc can anu user sign up
    //Route Post/sign-up
    //Access private['admin','manager','user']
    @Controller('sign-up')
    export class AuthSignUpController{
        constructor(private readonly authService:AuthService){}
        @Post()
        signUp(
            @Body(new ValidationPipe({whitelist:true,forbidNonWhitelisted:true}))
            body:signUpDto){
            return this.authService.signUp(body);
        }
}