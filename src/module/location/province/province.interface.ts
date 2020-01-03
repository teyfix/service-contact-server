import { BaseInterface } from 'src/mongo/base.interface';
import { NeighborhoodInterface } from '../neighborhood/neighborhood.interface';

export interface ProvinceInterface extends BaseInterface {
  title: string;
  zipCode: string;
  neighborhoods: NeighborhoodInterface[];
}
