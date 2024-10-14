import CourseItem from "./CourseItem";
//CSS module -> importeer je eigenlijk een JS object om mee verder te werken
import styles from "./Courses.module.css";
import Button from "./Button.jsx";

const Courses = ({ courses }) => {
  const handleClick = () => {
    //console.log(event.target); - event toevoegen in functionheader
    console.log("Geklikt op de button");
  };

  return (
    <>
      <h3 className={styles.title}>Vakken</h3>
      <ul>
        {courses.map((c) => (
          <CourseItem key={c} course={c} />
        ))}
      </ul>
      {/* <button
        className="px-4 py-2 bg-sky-400 text-white hover:bg-sky-300 rounded-lg"
        onClick={handleClick}
      >
        Klik mij
      </button> */}
      <Button onClick={handleClick}>CoursesButton</Button>
    </>
  );
};

export default Courses;
