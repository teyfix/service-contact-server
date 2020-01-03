import { Schema, SchemaDefinition } from 'mongoose';

export class BaseSchema extends Schema {
  constructor(definition: SchemaDefinition) {
    super(definition, {timestamps: true, versionKey: false});
  }
}
