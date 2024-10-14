import CourseItem from "./CourseItem";
import { PropsWithChildren } from "react";
import Button from "./Button";
// import { Student } from "../App";
// const student: Student = { fName: "Stan", lName: "Claeys" };
// console.log(student);

interface CoursesProps extends PropsWithChildren {
  courses: string[];
}

const Courses = ({ courses }: CoursesProps) => {
  const handleClick = () => {
    console.log("Op de button geklikt");
  };

  return (
    <>
      <ul>
        {courses.map((c) => (
          <CourseItem key={c} course={c} />
        ))}
      </ul>
      <Button onClick={handleClick}>CoursesButton</Button>
    </>
  );
};

export default Courses;
