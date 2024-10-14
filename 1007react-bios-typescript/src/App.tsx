import Button from "./components/Button";
import Counter from "./components/Counter";
import Courses from "./components/Courses";

const subTitle: string = "Vak over React en Node.js";

export interface Student {
  fName: string;
  lName: string;
}
const { fName, lName }: Student = {
  fName: "Stan",
  lName: "Claeys",
};

const courses: string[] = ["Web 1", "Web 2", "Web 3", "Mobile"];

const App = () => {
  return (
    <>
      <h1>Web 3</h1>
      <h3>{subTitle}</h3>
      <p>{`Voornaam: ${fName}, Achternaam: ${lName}`}</p>
      <Button
        onClick={() => {
          alert("Je hebt op de button geklikt");
        }}
      >
        AppButton
      </Button>

      <Courses courses={courses} />
      {courses.length ? <p>Er zijn vakken</p> : <p>Er zijn geen vakken</p>}
      {courses.length && <p>Er zijn vakken</p>}

      <Counter />

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam sapiente
        dolorem, asperiores natus ipsam alias laboriosam voluptatum ratione
        laudantium eum voluptas maxime est expedita? Voluptas placeat alias qui
        enim asperiores.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam sapiente
        dolorem, asperiores natus ipsam alias laboriosam voluptatum ratione
        laudantium eum voluptas maxime est expedita? Voluptas placeat alias qui
        enim asperiores.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam sapiente
        dolorem, asperiores natus ipsam alias laboriosam voluptatum ratione
        laudantium eum voluptas maxime est expedita? Voluptas placeat alias qui
        enim asperiores.
      </p>
    </>
  );
};

export default App;
