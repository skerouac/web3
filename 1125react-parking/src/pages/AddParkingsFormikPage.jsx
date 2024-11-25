import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const courses = [
  {
    id: 1,
    label: "Web 1",
    value: "web1",
  },
  {
    id: 2,
    label: "Web 2",
    value: "web2",
  },
  {
    id: 3,
    label: "Web 3",
    value: "web3",
  },
  {
    id: 4,
    label: "Mobile",
    value: "mobile",
  },
];

//Validatieschema aanmaken
const validationSchema = Yup.object().shape({
  name: Yup.string().required().min(4).max(25).trim(),
  age: Yup.number().positive().integer().required().min(16),
  course: Yup.string()
    .oneOf(courses.map((c) => c.value))
    .required(),
  gender: Yup.string().oneOf(["male", "female"]).required(),
});

const AddParkingsFormikPage = () => {
  const { values, handleChange, handleSubmit, setFieldValue, errors } =
    useFormik({
      initialValues: {
        name: "",
        age: 0,
        course: courses[0].value,
        gender: "",
      },
      onSubmit: (values) => {
        console.log(values);
        //POST REQUEST
        //Axios.post("http://localhost:3000/api/parkings", values)
      },
      validationSchema: validationSchema,
    });
  return (
    <div className="p-4">
      <form onSubmit={handleSubmit}>
        <label htmlFor="naam">Naam:</label>
        <input
          id="naam" //deze gebruik je voor aan je label te geraken
          className="px-4 py-2 border rounded-md block m-2"
          type="text"
          placeholder="Naam"
          name="name" //deze gebruik je voor hierboven in de intitialValues
          value={values.name}
          onChange={handleChange}
        />
        <p className="text-red-500">{errors.name}</p>
        <label htmlFor="age">Leeftijd:</label>
        <input
          id="age"
          className="px-4 py-2 border rounded-md block m-2"
          type="number"
          placeholder="Leeftijd"
          name="age"
          value={values.age}
          onChange={handleChange}
        />
        <p className="text-red-500">{errors.age}</p>
        <label htmlFor="courses">Courses:</label>
        <select
          id="courses"
          className="px-4 py-2 border rounded-md block m-2"
          name="course"
          value={values.course}
          onChange={handleChange}
        >
          {courses.map((c) => (
            <option key={c.id} value={c.value}>
              {c.label}
            </option>
          ))}
        </select>
        <p className="text-red-500">{errors.courses}</p>
        <div>
          <input
            type="radio"
            name="gender"
            id="genderMale"
            className="block w-4 h-4"
            checked={values.gender === "male"}
            //value="male" ---> gebruik hier beter de setFieldValue
            onChange={() => {
              setFieldValue("gender", "male");
            }}
          />
          <label htmlFor="genderMale">Man</label>
          <input
            type="radio"
            name="gender"
            id="genderFemale"
            className="block w-4 h-4"
            checked={values.gender === "female"}
            //value="female" ---> gebruik hier beter de setFieldValue
            onChange={() => {
              setFieldValue("gender", "female");
            }}
          />
          <label htmlFor="genderFemale">Vrouw</label>
          <p className="text-red-500">{errors.gender}</p>
        </div>
        <button type="submit">Verstuur</button>
      </form>
    </div>
  );
};

export default AddParkingsFormikPage;
