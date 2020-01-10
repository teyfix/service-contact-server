import { BaseSchema } from 'src/mongo/base.schema';
import { bcrypt } from 'src/mongo/plugin/bcrypt.plugin';
import { sanitize } from 'src/mongo/plugin/sanitize.plugin';
import { Role, UserInterface } from './user.interface';

export const UserSchema = new BaseSchema({
  email: {type: String, unique: true},
  password: {type: String, bcrypt: true, sanitize: true},
  firstName: String,
  lastName: String,
  role: {type: Number, enum: Object.values(Role).filter(Number.isFinite), default: Role.User},
});

UserSchema.plugin(bcrypt);
UserSchema.plugin(sanitize);

UserSchema.method('canModify', function(this: UserInterface, user: UserInterface) {
  return this.id === user.id || this.role > user.role;
});

UserSchema.method('canModify', function(this: UserInterface, role: Role) {
  return role == null || this.role > role;
});
