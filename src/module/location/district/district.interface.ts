import { BaseInterface } from 'src/mongo/base.interface';
import { ProvinceInterface } from '../province/province.interface';

export interface DistrictInterface extends BaseInterface {
  title: string;
  provinces: ProvinceInterface[];
}
