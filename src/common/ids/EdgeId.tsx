import { Id } from './Id';

export class EdgeId extends Id {
    // weirdly required to force nominal type checking in typescript
    private _brand!: "EdgeId";
}
