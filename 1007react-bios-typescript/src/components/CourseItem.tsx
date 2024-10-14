import { PropsWithChildren } from "react";

interface CourseProps extends PropsWithChildren {
  course: string;
}

const CourseItem = ({ course }: CourseProps) => {
  return <li>{course}</li>;
};

export default CourseItem;
