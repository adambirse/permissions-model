import { Organisation } from '../../permissionDomain/model/organisation';
import { Permission } from '../../permissionDomain/model/permission';
import { User } from '../../permissionDomain/model/user';
import { UserService } from '../../permissionDomain/service/userService';
import { ConsumerService } from './consumerService';
describe('Consumer service', () => {
  const requiredPermission = 'requiredPermission';
  it('can only perform action if a valid user with permission', () => {
    const userService = new UserService();
    const validUser = new User('Valid', new Organisation('org'));
    validUser.addPermission([new Permission(requiredPermission)]);
    userService.add(validUser);
    const service = new ConsumerService(userService);
    expect(service.performRestrictedAction(validUser.name, requiredPermission)).toBeTruthy();
  });

  it('cannot perform action if undefined', () => {
    const userService = new UserService();
    const service = new ConsumerService(userService);
    expect(service.performRestrictedAction('unknown user', requiredPermission)).toBeFalsy();
  });

  it('cannot perform action if user is missing permission', () => {
    const userService = new UserService();
    const validUser = new User('Valid', new Organisation('org'));
    userService.add(validUser);
    const service = new ConsumerService(userService);
    expect(service.performRestrictedAction(validUser.name, requiredPermission)).toBeFalsy();
  });
});
