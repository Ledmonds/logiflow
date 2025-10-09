import { IEquatiable } from './IEquatiable';

export class Id implements IEquatiable<Id> {
    readonly Id: string;

    constructor(id: string) {
        if (id.length === 0 || id === undefined) {
            throw new Error("Id cannot be empty");
        }

        this.Id = id;
    }

    hash(): string {
        return this.Id;
    }

    public equals(other: Id): boolean {
        return this.Id === other.Id;
    }
}
