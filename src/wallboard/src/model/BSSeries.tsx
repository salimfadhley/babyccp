import {BSLocation, BSLocationInterface} from "./BSLocation";
import {BSEventInterface} from "./BSEvent";

export interface BSSeriesInterface {
}

export class BSSeries implements BSSeriesInterface {
    constructor(readonly  name: string, readonly location:BSLocationInterface, readonly events: BSEventInterface[]) {
    }
}