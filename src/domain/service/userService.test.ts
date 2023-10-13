import { Organisation } from '../model/organisation';
import { User } from '../model/user';
import { UserService } from './userService';

describe('User service', () => {
  const userService = new UserService();
  it('Successfully add a user', () => {
    const organisation = new Organisation('asd');
    const user = new User('me', organisation);
    userService.add(user);
    expect(userService.get('me')).toBeDefined();
  });
});
