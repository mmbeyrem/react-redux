import React from 'react'
import { connect } from 'react-redux'
import * as courseActions from "../../redux/actions/courseActions";
import * as authorActions from "../../redux/actions/authorActions";
import propTypes from 'prop-types';
import { bindActionCreators } from "redux";
import CourseList from './CourseList';
import { Redirect } from "react-router-dom";
import Spinner from '../common/Spinner';
import { toast } from 'react-toastify';

class CoursesPage extends React.Component {
    state = {
        redirectoCoursePage: false
    };
    componentDidMount() {
        const { courses, authors, actions } = this.props;
        if (courses.length === 0)
            actions.loadCourses()
                .catch(e => alert('load courses fail:' + e));
        if (authors.length === 0)
            actions.loadAuthors()
                .catch(e => alert('load authors  fail:' + e));
    }
    deleteCourseHandler = course => {
        // eslint-disable-next-line no-debugger
        debugger;
        toast.success(`course ${course.title} is deleted`);
        this.props.actions.deleteCourse(course)
            .catch(e => toast.error(`Delete failed ${e.message}`, { autoClose: false }));
    };
    render() {
        // eslint-disable-next-line no-debugger
        debugger;
        return (<>
            {this.state.redirectoCoursePage && <Redirect to='/course' />}
            <h2>Courses</h2>
            {this.props.loading
                ? <Spinner />
                : (<><button style={{ marginBottom: 20 }}
                    className='btn btn-primary add-course'
                    onClick={() => this.setState({ redirectoCoursePage: true })}
                >Add new </button>
                    <CourseList courses={this.props.courses}
                        handleDelete={this.deleteCourseHandler} />
                </>)
            }
        </>
        )
    }

}

CoursesPage.propTypes = {
    courses: propTypes.array.isRequired,
    authors: propTypes.array.isRequired,
    actions: propTypes.object.isRequired,
    loading: propTypes.bool.isRequired,
}

function mapStateToProps({ authors, courses, ...state }) {
    // eslint-disable-next-line no-debugger
    debugger;
    return {
        courses: authors.length === 0
            ? []
            : courses.map(c => ({
                ...c,
                authorName: authors.find(a => a.id === c.authorId).name
            })),
        authors: authors,
        loading: state.apiCallInProgress > 0
    }
}
function mapDispatchToProps(dispatch) {
    return {
        actions: {
            loadCourses: bindActionCreators(courseActions.loadCourses, dispatch),
            loadAuthors: bindActionCreators(authorActions.loadAuthors, dispatch),
            deleteCourse: bindActionCreators(courseActions.deleteCourse, dispatch),
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);