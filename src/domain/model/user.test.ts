import { Organisation } from './organisation';
import { Permission } from './permission';
import { PermissionGroup } from './permissionGroup';
import { User } from './user';
describe('User', () => {
  const organisation = new Organisation('organisation');
  const permission1 = new Permission('permission 1');
  const permission2 = new Permission('permission 2');
  const permissionGroup = new PermissionGroup('name');
  permissionGroup.add(permission1);
  permissionGroup.add(permission2);

  it('Can create a User', () => {
    const user = new User('name', organisation);
    expect(user.name).toBe('name');
    expect(user.organisation.name).toBe('organisation');
  });
  it('check user has permission', () => {
    const user = new User('name', organisation);
    user.addPermission(permissionGroup);
    expect(user.hasPermission('permission 1')).toBeTruthy();
  });
  it('check user does not have permission', () => {
    const user = new User('name', organisation);
    user.addPermission(permissionGroup);
    expect(user.hasPermission('permission unknown')).toBeFalsy();
  });
});
