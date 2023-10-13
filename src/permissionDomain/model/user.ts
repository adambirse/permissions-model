import { Organisation } from './organisation';
import { Permission } from './permission';

export class User {
  name: string;
  organisation: Organisation;
  permissions: Permission[];

  constructor(name: string, organisation: Organisation) {
    this.name = name;
    this.organisation = organisation;
    this.permissions = [];
  }
  addPermission(permissions: Permission[]) {
    this.permissions.push(...permissions);
  }
  hasPermission(permission: string) {
    return this.permissions.some((it) => {
      return it.matches(permission);
    });
  }
}
