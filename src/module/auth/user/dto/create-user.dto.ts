import { IsEmail } from 'class-validator';
import { IsPassword } from 'src/validator/is-password';
import { IsName } from 'src/validator/is-name';
import { Role } from '../user.interface';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsPassword()
  password: string;

  @IsName()
  firstName: string;

  @IsName(false)
  lastName: string;

  role: Role;
}
