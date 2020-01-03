import { FaultInterface } from 'src/module/panel/fault/fault.interface';
import { FieldTeamInterface } from 'src/module/panel/field-team/field-team.interface';
import { CreateFaultRecordDto } from 'src/module/panel/fault-record/dto/create-fault-record.dto';
import { IsOptional } from 'class-validator';

export class UpdateFaultRecordDto extends CreateFaultRecordDto {
  @IsOptional()
  fault: FaultInterface;

  @IsOptional()
  fieldTeam: FieldTeamInterface;
}
