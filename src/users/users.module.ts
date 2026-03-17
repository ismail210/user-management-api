import { Module } from '@nestjs/common';
import { UserController } from './controllers/Admins/users.controller';
import { DatabaseModule } from 'src/database/database.module';
import { UsersService } from './services/Admins/users.service';
import { usersProviders } from './providers/users.provider';
import { JwtModule } from '@nestjs/jwt';
import { AuthSignInController, AuthSignUpController } from './controllers/Auth/Auth.controller';
import { AuthService } from './services/Auth/Auth.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports:[DatabaseModule,
  JwtModule.register({
    global:true,
    secret:process.env.JWT_SECRET,
    signOptions:{expiresIn:'300s'}
  }),
  ConfigModule.forRoot({isGlobal:true})],
  controllers: [UserController,AuthSignInController,AuthSignUpController],
  providers: [...usersProviders,UsersService,AuthService]
})
export class UsersModule {}
