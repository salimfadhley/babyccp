interface BSActInterface {
    name: string;
    displayName: ()=>string
}


export class BSAct implements BSActInterface {
    constructor(readonly name: string) {
    }
    displayName():string {
        return this.name;
    }
    alias(performingAs:string):BSActInterface {
        return new BSActWithAlias(this.name, performingAs)
    }
}

export class BSActWithAlias implements BSActInterface {
    constructor(readonly name: string, readonly performingAs: string) {}
    displayName():string {
        return this.performingAs;
    }
}



