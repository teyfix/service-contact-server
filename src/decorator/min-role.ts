import { applyDecorators, SetMetadata, UseGuards } from '@nestjs/common';
import { Role } from 'src/module/auth/user/user.interface';
import { Authorized } from 'src/decorator/authorized';
import { RolesGuard } from 'src/roles.guard';

export const MinRole = (role: Role) => applyDecorators(
  SetMetadata('min-role', role),
  Authorized(),
  UseGuards(RolesGuard),
);
