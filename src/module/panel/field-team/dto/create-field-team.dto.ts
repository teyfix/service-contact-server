import { IsName } from 'src/validator/is-name';
import { IsMongoId } from 'class-validator';
import { CityInterface } from 'src/module/location/city/city.interface';
import { IsPhone } from 'src/validator/is-phone';

export class CreateFieldTeamDto {
  @IsName()
  title: string;

  @IsMongoId()
  city: CityInterface;

  @IsPhone()
  phone: string;
}
