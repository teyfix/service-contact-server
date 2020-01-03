import { FaultInterface } from 'src/module/panel/fault/fault.interface';
import { FieldTeamInterface } from 'src/module/panel/field-team/field-team.interface';
import { IsMongoId } from 'class-validator';

export class CreateFaultRecordDto {
  @IsMongoId()
  fault: FaultInterface;

  @IsMongoId()
  fieldTeam: FieldTeamInterface;
}
