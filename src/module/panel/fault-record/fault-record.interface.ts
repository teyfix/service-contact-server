import { BaseInterface } from 'src/mongo/base.interface';
import { FaultInterface } from 'src/module/panel/fault/fault.interface';
import { FieldTeamInterface } from 'src/module/panel/field-team/field-team.interface';
import { CityInterface } from 'src/module/location/city/city.interface';

export interface FaultRecordInterface extends BaseInterface {
  city: CityInterface;
  fault: FaultInterface;
  fieldTeam: FieldTeamInterface;
}
