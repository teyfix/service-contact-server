import { BaseSchema } from 'src/mongo/base.schema';
import { autopopulate } from 'src/mongo/plugin/autopopulate.plugin';

export const FieldTeamSchema = new BaseSchema({
  title: String,
  city: {type: BaseSchema.Types.ObjectId, ref: 'City', autopopulate: true},
  phone: String,
  faults: [{type: BaseSchema.Types.ObjectId, ref: 'Fault', autopopulate: true}],
});

FieldTeamSchema.plugin(autopopulate);
