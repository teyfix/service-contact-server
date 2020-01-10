import { IsName } from 'src/validator/is-name';
import { IsPhone } from 'src/validator/is-phone';
import { IsMongoId } from 'class-validator';
import { CityInterface } from 'src/module/location/city/city.interface';

export class CreateDealerDto {
  @IsName()
  title: string;

  @IsMongoId()
  city: string | CityInterface;

  @IsPhone()
  phone: string;
}
