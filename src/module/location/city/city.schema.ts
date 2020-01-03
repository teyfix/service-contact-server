import { BaseSchema } from 'src/mongo/base.schema';
import { Schema } from 'mongoose';

export const CitySchema = new BaseSchema({
  title: String,
  code: String,
  districts: {type: [Schema.Types.ObjectId], ref: 'District', select: false},
});
