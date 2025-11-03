import { Id } from './Id';

export class NodeId extends Id {
    // weirdly required to force nominal type checking in typescript
    private _brand!: "NodeId";
}
