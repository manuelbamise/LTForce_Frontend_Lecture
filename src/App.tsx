const App = () => {
  // const age = 18;
  // const ageLimit = 18;

  // const calAge = (x: number, y: number): number => {
  //   return x + y;
  // };

  interface object1 {
    name: string;
    age: number;
  }

  const firstObject: object1 = {
    name: "Ejhirooghene",
    age: 37,
  };

  return (
    <>
      <h1>New Html file</h1>
      <p>{firstObject.name}</p>
      <p>{firstObject.age}</p>
    </>
  );
};

export default App;
