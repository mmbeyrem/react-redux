/* eslint-disable no-console */
import actionsDef from "../actionsDef";
import initialState from "./initialState"
export default function courseReducer(state = initialState.courses, action) {
    switch (action.type) {
        case actionsDef.CREATE_COURSE:
            console.log("current state:" + JSON.stringify(state));
            console.log("current action:" + JSON.stringify(action));
            return [...state, { ...action.course }];
        case actionsDef.UPDATE_COURSE:
            return state.map(c => c.id === action.course.id ? action.course : c)
        case actionsDef.LOAD_COURSES:
            return action.courses;
        case actionsDef.DELETE_COURSE:
            return state.filter(c => c.id !== action.course.id)
        default:
            return state;
    }
}