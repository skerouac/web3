//Enkel naam komt vanuit een dependency of third party package
import "./App.css";
import Courses from "./components/Courses";
import Button from "./components/Button";
import Counter from "./components/Counter";

const subTitle = "Vak over React en Node.js";
const { fName, lName } = {
  fName: "Stan",
  lName: "Claeys",
};
const courses = ["Web 1", "Web 2", "Web 3", "Mobile"];

function App() {
  //als je iets returned, mag er altijd maar 1 parent-element zijn
  const handleClick = () => {
    alert("Je hebt op de button geklikt");
  };

  return (
    <>
      <h1 className="title">Web 3</h1>
      <h3>{subTitle}</h3>
      <p>{`Voornaam: ${fName}, Achternaam: ${lName}`}</p>
      <Button onClick={handleClick}>
        <div>
          <p>AppButton</p>
        </div>
      </Button>
      <Button
        onClick={() => {
          alert("Je hebt op de inlinebutten geklikt");
        }}
      >
        AppButton
      </Button>

      <Courses courses={courses} />

      <Counter />

      {courses.length ? <p>Er zijn vakken</p> : <p>Er zijn geen vakken</p>}
      {courses.length && <p>Er zijn vakken</p>}

      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
        dignissimos consequatur libero similique enim quo maxime autem at ex,
        quod earum ullam quasi rem possimus. Maxime explicabo ullam aliquam
        alias?
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
        dignissimos consequatur libero similique enim quo maxime autem at ex,
        quod earum ullam quasi rem possimus. Maxime explicabo ullam aliquam
        alias?
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
        dignissimos consequatur libero similique enim quo maxime autem at ex,
        quod earum ullam quasi rem possimus. Maxime explicabo ullam aliquam
        alias?
      </p>
    </>
  );
}

export default App;
