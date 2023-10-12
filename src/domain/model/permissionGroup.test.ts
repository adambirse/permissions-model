import { Permission } from './permission';

import { PermissionGroup } from './permissionGroup';

describe('PermissionGroup', () => {
  const permission1 = new Permission('permission 1');
  const permission2 = new Permission('permission 2');

  it('Can create a Permission group', () => {
    const permissionGroup = new PermissionGroup('name');
    permissionGroup.add(permission1);
    permissionGroup.add(permission2);
    expect(permissionGroup.name).toBe('name');
    expect(permissionGroup.permissions).toContainEqual(permission1);
    expect(permissionGroup.permissions).toContainEqual(permission2);
  });
});
