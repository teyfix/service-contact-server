import { BaseSchema } from 'src/mongo/base.schema';
import { autopopulate } from 'src/mongo/plugin/autopopulate.plugin';

export const FaultRecordSchema = new BaseSchema({
  city: {type: BaseSchema.Types.ObjectId, ref: 'City', autopopulate: true},
  fault: {type: BaseSchema.Types.ObjectId, ref: 'Fault', autopopulate: true},
  fieldTeam: {type: BaseSchema.Types.ObjectId, ref: 'FieldTeam', autopopulate: true},
});

FaultRecordSchema.plugin(autopopulate);
