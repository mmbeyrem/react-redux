import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import * as courseActions from "../../redux/actions/courseActions";
import * as authorActions from "../../redux/actions/authorActions";
import propTypes from 'prop-types';
import CourseForm from "./CourseForm";
import { newCourse } from "../../../tools/mockData";
import Spinner from "../common/Spinner";
import { toast } from "react-toastify";
function ManageCoursePage({
    courses,
    authors,
    loadCourses, saveCourse, loadAuthors,
    history,
    ...props }) {

    const [course, setCourse] = useState({ ...props.course });
    // eslint-disable-next-line no-unused-vars
    const [errors, setErrors] = useState({});
    const [savingStatus, setsavingStatus] = useState(false);
    useEffect(() => {
        setCourse({ ...props.course });
        if (courses.length === 0)
            loadCourses();
        if (authors.length === 0)
            loadAuthors();
    }, []);
    function handleChange(event) {
        const { name, value } = event.target;
        setCourse(prevCourse => ({
            ...prevCourse,
            [name]: name == "authorId" ? parseInt(value, 10) : value
        }));
    }
    function isValidForm() {
        const { title, authorId, category } = course;
        const _errors = {};
        if (!title) _errors.title = "Title is required";
        if (!authorId) _errors.author = "author is required";
        if (!category) _errors.category = "category is required";
        setErrors(_errors);
        return Object.keys(_errors).length === 0;
    }
    function onSave(event) {
        // eslint-disable-next-line no-debugger
        debugger;
        event.preventDefault();
        setErrors({});
        setsavingStatus(true);
        if (!isValidForm()) {
            setsavingStatus(false);
            return;
        }

        saveCourse(course).then(() => {
            toast.success(`course ${course.title} saved`);
            history.push('/courses');
        }).catch(e => {
            setsavingStatus(false);
            setErrors({ onSave: e.message });
        });
    }

    return (
        authors.length == 0 && courses.length == 0
            ? < Spinner />
            : (
                <CourseForm course={course} errors={errors}
                    onSave={onSave}
                    saveStauts={savingStatus}
                    authors={authors} onChange={handleChange} />
            )
    )
}

ManageCoursePage.propTypes = {
    course: propTypes.object.isRequired,
    courses: propTypes.array.isRequired,
    authors: propTypes.array.isRequired,
    history: propTypes.object.isRequired,
    loadCourses: propTypes.func.isRequired,
    loadAuthors: propTypes.func.isRequired,
    saveCourse: propTypes.func.isRequired,
}

function mapStateToProps({ authors, courses }, ownProps) {
    // eslint-disable-next-line no-debugger
    debugger;
    const slug = ownProps.match.params.slug;
    return {
        course: (courses.length == 0 && !slug)
            ? newCourse :
            courses.find(c => c.slug === slug),
        courses: courses,
        authors: authors,
    }
}
const mapDispatchToProps = {
    loadCourses: courseActions.loadCourses,
    saveCourse: courseActions.saveCourse,
    loadAuthors: authorActions.loadAuthors,
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);