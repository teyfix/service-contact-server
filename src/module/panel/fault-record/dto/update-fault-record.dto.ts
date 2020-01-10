import { FaultInterface } from 'src/module/panel/fault/fault.interface';
import { CreateFaultRecordDto } from 'src/module/panel/fault-record/dto/create-fault-record.dto';
import { IsOptional } from 'class-validator';
import { CityInterface } from 'src/module/location/city/city.interface';

export class UpdateFaultRecordDto extends CreateFaultRecordDto {
  @IsOptional()
  city: CityInterface;

  @IsOptional()
  fault: FaultInterface;
}
