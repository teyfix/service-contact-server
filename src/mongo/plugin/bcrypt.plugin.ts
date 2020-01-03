import { hash } from 'bcryptjs';
import { Document, Query } from 'mongoose';

const salt = Number(process.env.bcryptSalt);
const applyBcrypt = async (input: string) => hash(input, salt);

const documentMiddleware = async <T extends Document>(document: T, fields: string[]) => {
  for (const field of fields) {
    if (document.isModified(field)) {
      document[field] = await hash(document[field], salt);
    }
  }
};

const reviewMiddleware = (getMethod: string, setMethod: string) => {
  return async <T extends Document>(query: Query<T>, fields: string[]) => {
    let update = false;
    const queryFields = query[getMethod]();

    for (const field of fields) {
      if (field in queryFields) {
        update = true;
        queryFields[field] = await applyBcrypt(queryFields[field]);
      }
    }

    if (update) {
      this[setMethod](queryFields);
    }
  };
};

const queryMiddleware = reviewMiddleware('getQuery', 'setQuery');
const updateMiddleware = reviewMiddleware('getUpdate', 'setUpdate');

const applyMiddleware = (middleware, fields) => {
  return async function () {
    return middleware(this, fields);
  };
};

export const bcrypt = <T extends Document>(schema) => {
  const fields = Object.keys(schema.obj).filter(key => schema.obj[key].bcrypt);

  schema.pre('save', applyMiddleware(documentMiddleware, fields));

  schema.pre('find', applyMiddleware(queryMiddleware, fields));
  schema.pre('findOne', applyMiddleware(queryMiddleware, fields));

  schema.pre('update', applyMiddleware(updateMiddleware, fields));
  schema.pre('updateOne', applyMiddleware(updateMiddleware, fields));
  schema.pre('updateMany', applyMiddleware(updateMiddleware, fields));
};
