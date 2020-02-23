import actionsDef from "../actionsDef";
import initialState from "./initialState"
export default function authorReducer(state = initialState.authors, action) {
    switch (action.type) {
        case actionsDef.LOAD_AUTHORS:
            return action.authors;
        default:
            return state;
    }
}