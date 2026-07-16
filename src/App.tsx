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
        ))}
    </>
  );
};

export { App, type People };
