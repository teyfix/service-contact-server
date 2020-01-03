import { Controller, Get, Post } from '@nestjs/common';
import { VerifyUser } from 'src/decorator/verify-user';
import { User } from 'src/decorator/user';
import { Authorized } from 'src/decorator/authorized';
import { UserInterface } from '../user/user.interface';
import { JwtService } from '@nestjs/jwt';

@Controller('session')
export class SessionController {
  constructor(private readonly jwtService: JwtService) {
  }

  @Get()
  @Authorized()
  getSession(@User() user) {
    return user;
  }

  @Post()
  @VerifyUser()
  createSession(@User() user: UserInterface) {
    return {token: this.jwtService.sign({id: user.id})};
  }
}
