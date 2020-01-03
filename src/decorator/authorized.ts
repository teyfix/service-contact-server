import { UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

export const Authorized = () => UseGuards(AuthGuard('jwt'));
