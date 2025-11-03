import { IEquatiable } from "../equatiable.interface";

export abstract class Id implements IEquatiable<Id> {
  public readonly Id: string;

  constructor(id: string) {
    if (id.length === 0 || id === undefined) {
      throw new Error("Id cannot be empty");
    }

    this.Id = id;
  }

  public hash(): string {
    return this.Id;
  }

  public equals(other: Id): boolean {
    return this.Id === other.Id;
  }
}
