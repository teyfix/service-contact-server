import { Controller, Get } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CityInterface } from './city.interface';

@Controller('city')
export class CityController {
  constructor(@InjectModel('City') private readonly cityModel: Model<CityInterface>) {
  }

  @Get()
  async getCities() {
    return this.cityModel.find({});
  }
}
