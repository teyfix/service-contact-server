import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthService } from 'src/module/auth/auth.service';
import { UserInterface } from 'src/module/auth/user/user.interface';

interface RequestI {
  user: UserInterface;
  params: { [key: string]: string };
}

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private readonly reflector: Reflector, private readonly authService: AuthService) {
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const minRole = this.reflector.get<number>('min-role', context.getHandler());

    if (Number.isFinite(minRole)) {
      const user = context.switchToHttp().getRequest();

      if (user) {
        return user.role >= minRole;
      }

      throw new UnauthorizedException();
    }

    return true;
  }
}
