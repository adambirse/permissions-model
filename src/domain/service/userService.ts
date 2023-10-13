import { User } from '../model/user';
import { UserServiceOperations } from './userServiceOperations';

export class UserService implements UserServiceOperations {
  users: User[];

  constructor() {
    this.users = [];
  }

  add(user: User) {
    this.users.push(user);
  }
  get(id: string): User | undefined {
    return this.users.find((user) => {
      return user.name === id;
    });
  }
}
