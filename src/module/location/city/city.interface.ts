import { DistrictInterface } from '../district/district.interface';
import { BaseInterface } from 'src/mongo/base.interface';

export interface CityInterface extends BaseInterface {
  title: string;
  code: string;
  districts: DistrictInterface[];
}
