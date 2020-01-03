import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/helper/base.service';
import { CreateFaultDto } from 'src/module/panel/fault/dto/create-fault.dto';
import { UpdateFaultDto } from 'src/module/panel/fault/dto/update-fault.dto';
import { FaultInterface } from 'src/module/panel/fault/fault.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class FaultService extends BaseService<FaultInterface, CreateFaultDto, UpdateFaultDto> {
  constructor(@InjectModel('Fault') faultModel: Model<FaultInterface>) {
    super(faultModel);
  }
}
