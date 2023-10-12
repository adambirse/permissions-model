import { Permission } from './permission';

export class PermissionGroup {
  name: string;
  permissions: Permission[];

  constructor(name: string) {
    this.name = name;
    this.permissions = [];
  }

  add(permission: Permission) {
    this.permissions.push(permission);
  }
}
