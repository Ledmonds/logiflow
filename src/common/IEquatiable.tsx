export interface IEquatiable<T> {
    equals(other: T): boolean;
    hash(): string;
}
