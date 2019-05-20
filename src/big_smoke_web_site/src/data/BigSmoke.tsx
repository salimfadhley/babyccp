import {BSSeries, BSSeriesInterface} from "../model/BSSeries";
import {THE_NELL_OF_OLD_DRURY} from "./BSLocations";
import {BSEvent} from "../model/BSEvent";
import {
    ARCHIE_BRROKES_WATSON, BOB_MUNRO,
    BROOKE_HOERR, DANIEL_MCKEON, DAVID_EAGLE, HARI_SRISKANTHA,
    JAZ_MATTU,
    LUKE_CHILTON,
    MARC_SALMON,
    MARTY_WILLIAMS, PETER_HOSE, RICARDO_MOTTI, STEPHEN_CATLING,
    THOMAS_JAMES_ALLEN,
    VASH_PERNIKAR
} from "./BSActs";
import {BSAct} from "../model/BSAct";

function bs(date:Date, acts:BSAct[]): BSEvent {
    return new BSEvent(
        date, BROOKE_HOERR, acts
    )
}

function bsas(date:Date, acts:BSAct[]): BSEvent {
    return new BSEvent(
        date, MARC_SALMON, acts
    )
}

export const BIG_SMOKE: BSSeriesInterface = new BSSeries(
    "Big Smoke",
    THE_NELL_OF_OLD_DRURY,
    [
        bs(new Date(2019,5,23), [LUKE_CHILTON, VASH_PERNIKAR, JAZ_MATTU, THOMAS_JAMES_ALLEN]),
        bs(new Date(2019, 5, 30), [MARTY_WILLIAMS, PETER_HOSE, ARCHIE_BRROKES_WATSON]),
        bs(new Date(2019, 6, 6), [BOB_MUNRO, DANIEL_MCKEON, RICARDO_MOTTI]),
        bs(new Date(2019, 6, 13), [DAVID_EAGLE, HARI_SRISKANTHA]),
        bs(new Date(2019, 6, 6), [STEPHEN_CATLING]),
    ]
)

export const BIG_SMOKE_ALL_STARS: BSSeriesInterface = new BSSeries(
    "Big Smoke All Stars",
    THE_NELL_OF_OLD_DRURY,
    []
)