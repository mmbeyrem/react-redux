import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CourseList = ({ courses, handleDelete }) => (
    <table className="table">
        <thead>
            <tr>
                <th />
                <th>Title</th>
                <th>Author</th>
                <th>Category</th>
                <th />
            </tr>
        </thead>
        <tbody>
            {courses.map(course => {
                return (
                    <tr key={course.id}>
                        <td>
                            <a
                                className="btn btn-light"
                                href={"http://pluralsight.com/courses/" + course.slug}
                            >
                                Watch
              </a>
                        </td>
                        <td>
                            <Link to={"/course/" + course.slug}>{course.title}</Link>
                        </td>
                        <td>{course.authorName}</td>
                        <td>{course.category}</td>
                        <td>
                            <button onClick={() => handleDelete(course)} className='btn btn-danger' >
                                X
                                </button>  </td>
                    </tr>
                );
            })}
        </tbody>
    </table>
);

CourseList.propTypes = {
    courses: PropTypes.array.isRequired,
    handleDelete: PropTypes.func.isRequired,
};

export default CourseList;
