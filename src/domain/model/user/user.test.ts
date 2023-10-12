import { User } from './user';
describe('User', () => {
  it('Can create a User', () => {
    const user = new User('name');
    expect(user.name).toBe('name');
  });
});
