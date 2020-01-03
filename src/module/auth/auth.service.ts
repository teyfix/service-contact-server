import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserInterface } from './user/user.interface';
import { CreateUserDto } from './user/dto/create-user.dto';
import { BaseService } from 'src/helper/base.service';
import { UpdateUserDto } from 'src/module/auth/user/dto/update-user.dto';

@Injectable()
export class AuthService extends BaseService<UserInterface, CreateUserDto, UpdateUserDto> {
  constructor(@InjectModel('User') userModel: Model<UserInterface>) {
    super(userModel);
  }

  async create(createUserDto: CreateUserDto) {
    return super.create(createUserDto);
  }

  async findByEmail(email: string) {
    return super.findOne({email});
  }

  async emailAvailable(email: string) {
    return !email || super.available({email});
  }
}
