import { Organisation } from '../model/organisation';
import { User } from '../model/user';
import { UserService } from './userService';

describe('User service', () => {
  const userService = new UserService();


  it('Successfully add multiple users', () => {
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
    const organisation = new Organisation('asd');
    const user = new User('me', organisation);
    userService.add(user);
    expect(userService.get('unknown')).toBeUndefined();
  });
});
