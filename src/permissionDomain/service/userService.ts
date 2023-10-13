import { Permission } from '../model/permission';
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

  grantPermission(userId: string, permission: string): void {
    const user = this.get(userId);
    user?.addPermission([new Permission(permission)]);
  }
  hasPermission(userId: string, permission: string): boolean {
    const user = this.get(userId);
    return !!user && user.hasPermission(permission);
  }
}
