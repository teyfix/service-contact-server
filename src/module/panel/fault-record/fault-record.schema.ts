import { BaseSchema } from 'src/mongo/base.schema';

export const FaultRecordSchema = new BaseSchema({
  city: {type: BaseSchema.Types.ObjectId, ref: 'City'},
  fault: {type: BaseSchema.Types.ObjectId, ref: 'Fault'},
  fieldTeam: {type: BaseSchema.Types.ObjectId, ref: 'FieldTeam'},
});
