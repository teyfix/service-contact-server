import { BaseSchema } from 'src/mongo/base.schema';

export const DistrictSchema = new BaseSchema({
  title: String,
  provinces: [{type: BaseSchema.Types.ObjectId, ref: 'Province'}],
});
