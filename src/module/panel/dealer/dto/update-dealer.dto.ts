import { CreateDealerDto } from 'src/module/panel/dealer/dto/create-dealer.dto';
import { IsOptional } from 'class-validator';
import { CityInterface } from 'src/module/location/city/city.interface';

export class UpdateDealerDto extends CreateDealerDto {
  @IsOptional()
  title: string;

  @IsOptional()
  phone: string;

  @IsOptional()
  city: CityInterface;
}
