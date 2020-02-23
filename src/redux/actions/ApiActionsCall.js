import actionsDef from '../actionsDef'
export function beginApiCall() {
    return { type: actionsDef.BEGIN_API_CALL }
}
export function endApiCall() {
    return { type: actionsDef.END_API_CALL }
}