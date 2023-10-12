import { Organisation } from "./organisation";

export class User {
  name: string;
  organisation: Organisation;

  constructor(name: string, organisation: Organisation) {
    this.name = name;
    this.organisation = organisation;
  }
}
