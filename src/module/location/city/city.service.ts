import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CityInterface } from 'src/module/location/city/city.interface';
import { BaseService } from 'src/helper/base.service';

@Injectable()
export class CityService extends BaseService<CityInterface> {
  constructor(@InjectModel('City') cityModel: Model<CityInterface>) {
    super(cityModel);
  }
}
