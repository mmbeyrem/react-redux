import actionsDef from "../actionsDef";
import * as authorApi from '../../api/authorApi';
import { beginApiCall, endApiCall } from './ApiActionsCall';

export function loadAuthorsSuccess(authors) {
    return { type: actionsDef.LOAD_AUTHORS, authors }
}
export function loadAuthors() {
    return function (dispatch) {
        dispatch(beginApiCall());
        return authorApi.getAuthors()
            .then(authors => dispatch(loadAuthorsSuccess(authors)))
            .catch(error => { throw error; })
            .finally(() => dispatch(endApiCall()))
            ;
    }
}