
import {
    CanActivate,
    ExecutionContext,
    Injectable,
    UnauthorizedException,
  } from '@nestjs/common';
  import { JwtService } from '@nestjs/jwt';
  import { Reflector } from '@nestjs/core';
  import { Roles } from './Roles.decorator';
  
  @Injectable()
  export class UsersGuard implements CanActivate {
    constructor(private jwtService: JwtService,
        private reflector:Reflector) {}
  
    async canActivate(context: ExecutionContext): Promise<boolean> {
      const roles = this.reflector.get(Roles,context.getHandler())
      //enpoint public
      if (!roles) {
        return true;
      }
      //get token 
      const request = context.switchToHttp().getRequest();
      const authHeader = request.headers.authorization;

        if (!authHeader) {
        throw new UnauthorizedException('No token provided');
        }
        //auth = `Bearer heweivecnajvjkahipijavgh`.split(' ',2)[1]
        //yaane bt2asmle l token l2 w btkhdo mno l bdo yeh[bearer,...]
      const token = authHeader.split(' ',2)[1];
      //verify token
      if(!token){
        throw new UnauthorizedException();
      }
      try {
        const payload = await this.jwtService.verifyAsync(token,{
            secret:process.env.JWT_SECRET
        });
        if (roles.includes(payload.role.toLowerCase())) {
            return true;
        }
        else{
            throw new UnauthorizedException();
        }
      } catch (error) {
        throw new UnauthorizedException();
      }
  
      
    }
  }
  