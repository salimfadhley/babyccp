import {BSAct} from "./BSAct";

export interface BSEventInterface {
    date: Date
    mc: BSAct
    acts: BSAct[]
}

export class BSEvent implements BSEventInterface {
    constructor(readonly date:Date, readonly mc: BSAct, readonly acts:BSAct[]) {
    }
}