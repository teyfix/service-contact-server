import { Body, Controller, Post } from '@nestjs/common';
import { ResetPasswordDto } from 'src/module/auth/reset-password/dto/reset-password.dto';

@Controller('reset-password')
export class ResetPasswordController {
  @Post()
  async resetPassword(@Body() resetPasswordDto: ResetPasswordDto) {
  }
}
