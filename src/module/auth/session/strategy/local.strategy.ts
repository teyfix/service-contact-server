import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Strategy } from 'passport-local';
import { compare } from 'bcryptjs';
import { AuthService } from '../../auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({usernameField: 'email'});
  }

  async validate(email: string, password: string) {
    const user = await this.authService.findByEmail(email);

    if (await compare(password, user.password)) {
      return user;
    }

    throw new UnauthorizedException();
  }
}
