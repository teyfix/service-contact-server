import { CityInterface } from '../city/city.interface';
import { BaseInterface } from 'src/mongo/base.interface';

export interface CountryInterface extends BaseInterface {
  title: string;
  code: string;
  area: string;
  cities: CityInterface[];
}
