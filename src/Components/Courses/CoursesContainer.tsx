import React from "react";
import "./Course.scss";
import { ICourse } from "../../types/types";
import { Course } from "./Course";

type CoursesContainer = {
    courses: ICourse[]
}

const CoursesContainerComponent: React.FC<CoursesContainer> = (props) => {
  const { courses } = props;

  return (
    <div className="courses">
      {courses.length !== 0 ? courses.map((course) => {
        return <Course key={course.id} id={course.id} name={course.name} image={course.image} bgColor={course.bgColor} />;
      }) : 'В данный момент не курсов для загрузки'}
    </div>
  );
};

export const CoursesContainer = React.memo(CoursesContainerComponent);
