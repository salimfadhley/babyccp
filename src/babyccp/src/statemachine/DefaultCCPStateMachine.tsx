import {StateMachine, StateMachineInterface} from "./StateMachine";

export enum States {
    LoggedOut = "Logged Out",
    Offline = "Offline",
    OnACall = "On A Call",
    AfterCallWork = "After Call Work",
    Available = "Available",
    Ringing = "Ringing"
}

export enum Transitions {
    LogIn = "Log In",
    LogOut = "Log Out",
    GoAvailable = "Go Available",
    TerminateCall = "Terminate Call",
    GoOffline = "Go Offline",
    InboundCall = "Inbound Call",
    PickUp = "Pick Up Call"
}

const StateMap: Map<States, Map<Transitions, States>> = new Map([
    [States.LoggedOut, new Map([
        [Transitions.LogIn, States.Offline]
    ])],
    [States.Offline, new Map([
        [Transitions.GoAvailable, States.Available],
        [Transitions.LogOut, States.LoggedOut]
    ])],
    [States.OnACall, new Map([
        [Transitions.TerminateCall, States.AfterCallWork],
        [Transitions.GoOffline, States.Offline]
     ])],
    [States.AfterCallWork, new Map([
        [Transitions.GoAvailable, States.Available],
        [Transitions.GoOffline, States.Offline],
        [Transitions.LogOut, States.LoggedOut]
    ])],
    [States.Available, new Map([
        [Transitions.GoOffline, States.Offline],
        [Transitions.LogOut, States.LoggedOut],
        [Transitions.InboundCall, States.Ringing]
    ])],
    [States.Ringing, new Map([
        [Transitions.PickUp, States.OnACall],
        [Transitions.GoOffline, States.Offline]
    ])]
]);

type CCPStateMachineInterface = StateMachineInterface<States,Transitions>;

export function CCPStateMachineFactory():CCPStateMachineInterface {
    return new StateMachine(StateMap, States.LoggedOut);
}
export const DefaultCCPStateMachine:CCPStateMachineInterface = CCPStateMachineFactory();


