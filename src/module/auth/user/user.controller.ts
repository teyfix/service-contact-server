import { Body, Controller, Delete, ForbiddenException, Get, Param, Patch, Post } from '@nestjs/common';
import { Role, UserInterface } from './user.interface';
import { AuthService } from '../auth.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { Authorized } from 'src/decorator/authorized';
import { User } from 'src/decorator/user';
import { MinRole } from 'src/decorator/min-role';

@Controller('user')
export class UserController {
  constructor(private readonly authService: AuthService) {
  }

  @Get()
  @MinRole(Role.Moderator)
  getAllUsers() {
    return this.authService.all();
  }

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto) {
    await this.authService.emailAvailable(createUserDto.email);

    createUserDto.role = Role.User;

    return this.authService.create(createUserDto);
  }

  @Patch(':id')
  @Authorized()
  async patchUser(@Param() {id}, @User() currentUser: UserInterface, @Body() updateUserDto: UpdateUserDto) {
    if (id === 'me') {
      id = currentUser.id;
    }

    const user = await this.authService.get(id);

    await this.authService.emailAvailable(updateUserDto.email);

    if (currentUser.canAssign(updateUserDto.role) && currentUser.canModify(user)) {
      return user.updateOne(updateUserDto, {new: true});
    }

    throw new ForbiddenException();
  }

  @Delete(':id')
  @Authorized()
  async deleteUser(@Param() {id}, @User() currentUser: UserInterface) {
    if (id === 'me') {
      id = currentUser.id;
    }

    const user = await this.authService.get(id);

    if (currentUser.canModify(user)) {
      await user.remove();
    } else {
      throw new ForbiddenException();
    }
  }
}
