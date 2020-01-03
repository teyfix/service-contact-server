import { BaseSchema } from 'src/mongo/base.schema';
import { bcrypt } from 'src/mongo/plugin/bcrypt.plugin';
import { sanitize } from 'src/mongo/plugin/sanitize.plugin';
import { Role, UserInterface } from './user.interface';

export const UserSchema = new BaseSchema({
  email: {type: String, unique: true, required: true},
  password: {type: String, bcrypt: true, sanitize: true, required: true},
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  role: {type: Number, enum: Object.values(Role).filter(Number.isFinite), required: true, default: Role.User},
});

UserSchema.plugin(bcrypt);
UserSchema.plugin(sanitize);

UserSchema.method('canModify', function (this: UserInterface, user: UserInterface) {
  return this.id === user.id || this.role > user.role;
});

UserSchema.method('canModify', function (this: UserInterface, role: Role) {
  return role == null || this.role > role;
});
