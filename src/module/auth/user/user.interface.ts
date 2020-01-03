import { BaseInterface } from 'src/mongo/base.interface';

export enum Role {
  User = 1,
  Moderator = 10,
  Admin = 20,
}

export interface UserInterface extends BaseInterface {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  role: Role;

  canAssign(role: Role): boolean;

  canModify(user: UserInterface): boolean;
}
