import { BaseSchema } from 'src/mongo/base.schema';
import { Schema } from 'mongoose';

export const CountrySchema = new BaseSchema({
  title: String,
  code: String,
  area: String,
  cities: {type: [Schema.Types.ObjectId], ref: 'City', select: false},
});
