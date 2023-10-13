import { Organisation } from '../../permissionDomain/model/organisation';
import { User } from '../../permissionDomain/model/user';
import { UserService } from '../../permissionDomain/service/userService';
import { ConsumerService } from './consumerService';
describe('Consumer service', () => {
  it('can only perform service if a valid user', () => {
    const userService = new UserService();
    const validUser = new User('Valid', new Organisation('org'));
    userService.add(validUser);
    const service = new ConsumerService(userService);
    expect(service.performRestrictedAction(validUser.name)).toBeTruthy();
  });

  it('cannot perform action if undefined', () => {
    const userService = new UserService();
    const service = new ConsumerService(userService);
    expect(service.performRestrictedAction('unknown user')).toBeFalsy();
  });
});
