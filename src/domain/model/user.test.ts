import { Organisation } from './organisation';
import { Permission } from './permission';
import { User } from './user';
describe('User', () => {
  const organisation = new Organisation('organisation');
  const permission1 = new Permission('permission 1');
  const permission2 = new Permission('permission 2');

  it('Can create a User', () => {
    const user = new User('name', organisation);
    expect(user.name).toBe('name');
    expect(user.organisation.name).toBe('organisation');
  });
  it('check user has permission', () => {
    const user = new User('name', organisation);
    user.addPermission([permission1, permission2]);
    expect(user.hasPermission('permission 1')).toBeTruthy();
  });
  it('check user does not have permission', () => {
    const user = new User('name', organisation);
    expect(user.hasPermission('permission unknown')).toBeFalsy();
  });
});
