import { BaseSchema } from '../base.schema';

export const sanitize = <T extends BaseSchema>(schema) => {
  const fields = Object.keys(schema.obj).filter(key => schema.obj[key].sanitize);

  schema.method('toJSON', function () {
    const object = this.toObject();

    fields.forEach(field => {
      delete object[field];
    });

    return object;
  });
};
