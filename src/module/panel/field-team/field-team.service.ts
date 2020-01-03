import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/helper/base.service';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateFieldTeamDto } from 'src/module/panel/field-team/dto/create-field-team.dto';
import { UpdateFieldTeamDto } from 'src/module/panel/field-team/dto/update-field-team.dto';
import { FieldTeamInterface } from 'src/module/panel/field-team/field-team.interface';

@Injectable()
export class FieldTeamService extends BaseService<FieldTeamInterface, CreateFieldTeamDto, UpdateFieldTeamDto> {
  constructor(@InjectModel('FieldTeam') fieldTeamModel: Model<FieldTeamInterface>) {
    super(fieldTeamModel);
  }
}
