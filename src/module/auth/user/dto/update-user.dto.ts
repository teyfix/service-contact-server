import { CreateUserDto } from './create-user.dto';
import { IsEnum, IsOptional } from 'class-validator';
import { Role } from '../user.interface';

export class UpdateUserDto extends CreateUserDto {
  @IsOptional()
  email: string;

  @IsOptional()
  password: string;

  @IsOptional()
  firstName: string;

  @IsOptional()
  lastName: string;

  @IsOptional()
  @IsEnum(Role)
  role: Role;
}
