export class Permission {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  matches(name: string) {
    return this.name === name;
  }
}
