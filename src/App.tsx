import NewText from "./components/newText";
import OldText from "./components/oldText";
import Person from "./components/person";

interface People {
  name: string;
  age: number;
  city?: string;
  color?: string;
}

const App = () => {
  // const age = 18;
  // const ageLimit = 18;

  // const calAge = (x: number, y: number): number => {
  //   return x + y;
  // };
  // condition ? true : false
  const people: People[] = [
    { name: "adejare", age: 45, city: "lagos" },
    { name: "Phillip", age: 32, city: "port-harcourt", color: "blue" },
    { name: "Damian", age: 49 },
  ];

  return (
    <>
      {/*<NavBar />*/}
      {/*<Person name="adejare" age="45" city="lagos" />*/}
      {people &&
        people.map((person, index) => (
          <div key={index}>
            <Person
              name={person.name}
              age={person.age}
              city={person.city}
              color={person.color}
            />{" "}
            <br />
          </div>
        ))}{" "}
      <br />
      <NewText>
        this is the new text written in the app.tsx component, but rendered by
        the New Text component
      </NewText>{" "}
      <br />
      <OldText>
        this is the old text written in the app.tsx component, but rendered by
        the Old Text component
      </OldText>
    </>
  );
};

export { App, type People };
