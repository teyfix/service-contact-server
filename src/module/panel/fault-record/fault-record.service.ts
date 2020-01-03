import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/helper/base.service';
import { FaultRecordInterface } from 'src/module/panel/fault-record/fault-record.interface';
import { CreateFaultRecordDto } from 'src/module/panel/fault-record/dto/create-fault-record.dto';
import { UpdateFaultRecordDto } from 'src/module/panel/fault-record/dto/update-fault-record.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class FaultRecordService extends BaseService<FaultRecordInterface, CreateFaultRecordDto, UpdateFaultRecordDto> {
  constructor(@InjectModel('FaultRecord') faultRecordModel: Model<FaultRecordInterface>) {
    super(faultRecordModel);
  }
}
