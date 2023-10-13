import { Organisation } from '../model/organisation';
import { Permission } from '../model/permission';
import { User } from '../model/user';
import { UserService } from './userService';

describe('User service', () => {
  it('Successfully add multiple users', () => {
    const userService = new UserService();
    const organisation = new Organisation('asd');
    const user = new User('me', organisation);
    const him = new User('him', organisation);
    const her = new User('her', organisation);
    const them = new User('them', organisation);
    userService.add(user);
    userService.add(him);
    userService.add(her);
    userService.add(them);
    expect(userService.get('me')).toBeDefined();
    expect(userService.get('him')).toBeDefined();
    expect(userService.get('her')).toBeDefined();
    expect(userService.get('them')).toBeDefined();
  });

  it('succesfully handles not finding a user', () => {
    const userService = new UserService();
    const organisation = new Organisation('asd');
    const user = new User('me', organisation);
    userService.add(user);
    expect(userService.get('unknown')).toBeUndefined();
  });

  it('succesfully add a permission to a user', () => {
    const userService = new UserService();
    const organisation = new Organisation('asd');
    const user = new User('me', organisation);
    const permission = new Permission('new permission');
    userService.add(user);
    userService.grantPermission(user.name, permission.name);
    expect(userService.get(user.name)?.permissions).toContainEqual(permission);
  });
});
