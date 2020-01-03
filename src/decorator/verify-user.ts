import { AuthGuard } from '@nestjs/passport';
import { UseGuards } from '@nestjs/common';

export const VerifyUser = () => UseGuards(AuthGuard('local'));
