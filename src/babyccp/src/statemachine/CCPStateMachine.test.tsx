import {CCPStateMachineFactory, DefaultCCPStateMachine, States, Transitions} from "./DefaultCCPStateMachine";

describe("CCPStateMachine", ()=>{
    it('it has a default state', () => {
        const defaultState:States = DefaultCCPStateMachine.getCurrentState()
    });

    it('it can change state', () => {
        const sm = CCPStateMachineFactory();
        sm.transition(Transitions.LogIn);
        const currentState:States = sm.getCurrentState();
        const defaultState:States = DefaultCCPStateMachine.getCurrentState();
        expect(currentState).toBe(States.Offline);
    });
});

