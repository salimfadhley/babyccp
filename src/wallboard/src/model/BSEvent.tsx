export interface BSEventInterface {
}

export class BSEvent implements BSEventInterface {
    constructor(readonly date:Date) {
    }
}