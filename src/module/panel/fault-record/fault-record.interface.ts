import { BaseInterface } from 'src/mongo/base.interface';
import { FaultInterface } from 'src/module/panel/fault/fault.interface';
import { FieldTeamInterface } from 'src/module/panel/field-team/field-team.interface';

export interface FaultRecordInterface extends BaseInterface {
  fault: FaultInterface;
  fieldTeam: FieldTeamInterface;
}
