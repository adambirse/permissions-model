import { User } from '../model/user';

export interface UserServiceOperations {
  add(user: User);
  get(id: string);
}
