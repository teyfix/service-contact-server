import { BaseInterface } from 'src/mongo/base.interface';
import { CityInterface } from '../../location/city/city.interface';

export interface DealerInterface extends BaseInterface {
  title: string;
  city: CityInterface;
  phone: string;
}
