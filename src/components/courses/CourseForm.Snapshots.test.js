import React from "react";
import CourseForm from "./CourseForm"
import renderer from "react-test-renderer";
import { courses, authors } from "../../../tools/mockData";

it("sets submit button labe 'saving...' when saving is true", () => {
  const tree = renderer.create(
    <CourseForm
      course={courses[0]}
      authors={authors}
      onChange={jest.fn()}
      onSave={jest.fn()}
      saveStaut
    />);
  expect(tree).toMatchSnaphsot();
}); 