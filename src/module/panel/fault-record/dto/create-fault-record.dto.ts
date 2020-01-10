import { FaultInterface } from 'src/module/panel/fault/fault.interface';
import { FieldTeamInterface } from 'src/module/panel/field-team/field-team.interface';
import { IsMongoId, IsOptional } from 'class-validator';
import { CityInterface } from 'src/module/location/city/city.interface';

export class CreateFaultRecordDto {
  @IsMongoId()
  city: CityInterface;

  @IsMongoId()
  fault: FaultInterface;

  @IsMongoId()
  @IsOptional()
  fieldTeam: FieldTeamInterface;
}
