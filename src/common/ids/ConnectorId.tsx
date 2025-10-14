import { Id } from './Id';

export class ConnectorId extends Id {
    // weirdly required to force nominal type checking in typescript
    private _brand!: "ConnectorId";
}
