import { Id } from "../../common/Id";


export interface INode {
    id: Id;
    isEvaluatable(): boolean;
    evaluate(): boolean | null;
}
