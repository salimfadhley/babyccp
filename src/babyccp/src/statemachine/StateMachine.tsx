import {States} from "./DefaultCCPStateMachine";

export interface StateMachineInterface<S,T> {

    currentState:S;
    getCurrentState():S;
    transition(t: T): void;
    getAvailableTransitions(): Map<T,S> | undefined
    setCurrentState(state:S):void
}

export class StateMachine<S,T> implements StateMachineInterface<S,T> {
    currentState:S;

    constructor(readonly states:Map<S,Map<T,S>>, readonly defaultState:S) {
        this.currentState = defaultState;
    }

    getCurrentState():S {
        return this.currentState;
    }

    setCurrentState(state:S) {
        this.currentState = state;
    }

    getAvailableTransitions(): Map<T,S> | undefined {
        return this.states.get(this.currentState)
    }


    transition(t: T):void {
        const transitionsForThisState = this.getAvailableTransitions();
        if (typeof transitionsForThisState === 'undefined') {
            throw new Error("Current state is unknown.")
        } else {
            const targetState:S|undefined = transitionsForThisState.get(t);
            if (typeof targetState === 'undefined') {
                throw new Error(`Transition ${t} is not valid for state ${this.currentState}.`)
            } else {
                this.setCurrentState(targetState);
            }
        }
    }




}
