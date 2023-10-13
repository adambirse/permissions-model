export interface ConsumerOperations {
  performRestrictedAction(userId: string, reqiredPermission: string);
}
