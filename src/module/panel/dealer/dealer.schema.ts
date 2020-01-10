import { BaseSchema } from 'src/mongo/base.schema';
import { autopopulate } from 'src/mongo/plugin/autopopulate.plugin';

export const DealerSchema = new BaseSchema({
  title: String,
  city: {type: BaseSchema.Types.ObjectId, ref: 'City', autopopulate: true},
  phone: String,
});

DealerSchema.plugin(autopopulate);
