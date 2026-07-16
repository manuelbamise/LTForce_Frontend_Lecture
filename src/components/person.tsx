import type { People } from "../App";

const Person = (props: People) => {
  const { name, age, city = "Global", color } = props;
  return (
    <>
      <h1>My name is {name}</h1>
      <p>I am {age} years old. </p>
      <p>I live in {city}.</p>
      <p>{color}</p>
    </>
  );
};

export default Person;
