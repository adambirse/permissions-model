import { Organisation } from './organisation';
import { Permission } from './permission';
import { PermissionGroup } from './permissionGroup';

export class User {
  name: string;
  organisation: Organisation;
  permissions: Permission[];

  constructor(name: string, organisation: Organisation) {
    this.name = name;
    this.organisation = organisation;
    this.permissions = [];
  }
  addPermission(permissionGroup: PermissionGroup) {
    this.permissions.push(...permissionGroup.permissions);
  }
  hasPermission(permission: string) {
    return this.permissions.some((it) => {
      return it.matches(permission);
    });
  }
}
