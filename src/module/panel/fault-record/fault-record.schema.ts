import { BaseSchema } from 'src/mongo/base.schema';
import { idValidator } from 'src/mongo/plugin/id-validator.plugin';

export const FaultRecordSchema = new BaseSchema({
  fault: {type: BaseSchema.Types.ObjectId, ref: 'Fault'},
  fieldTeam: {type: BaseSchema.Types.ObjectId, ref: 'FieldTeam'},
});

FaultRecordSchema.plugin(idValidator);
