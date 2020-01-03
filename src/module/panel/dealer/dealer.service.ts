import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { DealerInterface } from './dealer.interface';
import { Model } from 'mongoose';
import { CreateDealerDto } from 'src/module/panel/dealer/dto/create-dealer.dto';
import { BaseService } from 'src/helper/base.service';
import { UpdateDealerDto } from 'src/module/panel/dealer/dto/update-dealer.dto';

@Injectable()
export class DealerService extends BaseService<DealerInterface, CreateDealerDto, UpdateDealerDto> {
  constructor(@InjectModel('Dealer') dealerModel: Model<DealerInterface>) {
    super(dealerModel);
  }
}
