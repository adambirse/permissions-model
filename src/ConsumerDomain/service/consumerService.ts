import { UserService } from '../../permissionDomain/service/userService';
import { ConsumerOperations } from './consumerOperations';

export class ConsumerService implements ConsumerOperations {
  userService: UserService;

  constructor(userService: UserService) {
    this.userService = userService;
  }

  performRestrictedAction(userId: string, requiredPermission: string): boolean {
    const user = this.userService.get(userId);
    return user?.hasPermission(requiredPermission) ?? false;
  }
}
