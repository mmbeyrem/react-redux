/* eslint-disable no-console */
import actionsDef from "../actionsDef";
import initialState from "./initialState"
export default function apiCallReducer(state = initialState.apiCallInProgress, action) {
    switch (action.type) {
        case actionsDef.BEGIN_API_CALL:
            // eslint-disable-next-line no-debugger
            debugger;
            return state + 1;
        case actionsDef.END_API_CALL:
            // eslint-disable-next-line no-debugger
            debugger;
            return state - 1;
        default:
            return state;
    }
}