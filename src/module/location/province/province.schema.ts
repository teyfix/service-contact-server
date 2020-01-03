import { BaseSchema } from 'src/mongo/base.schema';

export const ProvinceSchema = new BaseSchema({
  title: String,
  zipCode: String,
  neighborhoods: [{type: BaseSchema.Types.ObjectId, ref: 'Neighborhood'}],
});
