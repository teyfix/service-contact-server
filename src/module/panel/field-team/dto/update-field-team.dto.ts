import { CreateFieldTeamDto } from 'src/module/panel/field-team/dto/create-field-team.dto';
import { IsOptional } from 'class-validator';
import { CityInterface } from 'src/module/location/city/city.interface';
import { FaultInterface } from 'src/module/panel/fault/fault.interface';

export class UpdateFieldTeamDto extends CreateFieldTeamDto {
  @IsOptional()
  title: string;

  @IsOptional()
  phone: string;

  @IsOptional()
  city: CityInterface;

  @IsOptional()
  faults: FaultInterface[];
}
