export interface BSLocationInterface {

}

export class BSLocation implements BSLocationInterface {
    constructor(readonly name: string, readonly address: string) {
    }
}