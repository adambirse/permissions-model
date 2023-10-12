import { Organisation } from './organisation';
import { User } from './user';
describe('User', () => {
  const organisation = new Organisation('organisation');

  it('Can create a User', () => {
    const user = new User('name', organisation);
    expect(user.name).toBe('name');
    expect(user.organisation.name).toBe('organisation');
  });
});
