import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './user/user.schema';
import { AuthService } from './auth.service';
import { UserController } from './user/user.controller';
import { JwtModule } from '@nestjs/jwt';
import { SessionController } from './session/session.controller';
import { JwtStrategy } from './session/strategy/jwt.strategy';
import { LocalStrategy } from './session/strategy/local.strategy';
import { ResetPasswordController } from 'src/module/auth/reset-password/reset-password.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: 'User', schema: UserSchema},
    ]),
    JwtModule.register({
      secret: process.env.jwtSecret,
      signOptions: {expiresIn: '1d'},
    }),
  ],
  exports: [MongooseModule, AuthService],
  providers: [
    AuthService,
    JwtStrategy,
    LocalStrategy,
  ],
  controllers: [UserController, SessionController, ResetPasswordController],
})
export class AuthModule {
}
