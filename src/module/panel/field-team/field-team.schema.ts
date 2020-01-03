import { BaseSchema } from 'src/mongo/base.schema';
import { idValidator } from 'src/mongo/plugin/id-validator.plugin';

export const FieldTeamSchema = new BaseSchema({
  title: String,
  city: {type: BaseSchema.Types.ObjectId, ref: 'City', required: true},
  phone: {type: String, required: true},
});

FieldTeamSchema.plugin(idValidator);
