import { BaseSchema } from 'src/mongo/base.schema';

export const FieldTeamSchema = new BaseSchema({
  title: String,
  city: {type: BaseSchema.Types.ObjectId, ref: 'City'},
  phone: String,
  faults: [{type: BaseSchema.Types.ObjectId, ref: 'Fault'}],
});
