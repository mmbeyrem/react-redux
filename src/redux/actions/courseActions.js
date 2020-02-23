import actionsDef from "../actionsDef";
import * as courseApi from '../../api/courseApi';
import { beginApiCall, endApiCall } from './ApiActionsCall';

export function createCourse(course) {
    return { type: actionsDef.CREATE_COURSE, course }
}
export function updateCourse(course) {
    return { type: actionsDef.UPDATE_COURSE, course }
}
export function loadCoursesSuccess(courses) {
    return { type: actionsDef.LOAD_COURSES, courses }
}

export function deleteCourseAction(course) {
    return { type: actionsDef.DELETE_COURSE, course }
}
export function loadCourses() {
    return function (dispatch) {
        // eslint-disable-next-line no-debugger
        debugger;
        dispatch(beginApiCall());
        return courseApi.getCourses()
            .then(courses => dispatch(loadCoursesSuccess(courses)))
            .catch(error => { throw error; })
            .finally(() => dispatch(endApiCall()));
    }
}
export function deleteCourse(course) {
    return function (dispatch) {
        dispatch(deleteCourseAction(course));
        return courseApi.deleteCourse(course.id)
            .catch(error => { throw error; });
    }
}
export function saveCourse(course) {
    return function (dispatch) {
        dispatch(beginApiCall());
        return courseApi.saveCourse(course)
            .then(savedCourse => {
                (course.id)
                    ? dispatch(updateCourse(savedCourse))
                    : dispatch(createCourse(savedCourse))
            })
            .catch(error => { throw error; })
            .finally(() => dispatch(endApiCall()))
            ;
    }
}