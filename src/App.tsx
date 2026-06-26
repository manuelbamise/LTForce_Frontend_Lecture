import ExternalList from "./components/externalList";

const App = () => {
  // const age = 18;
  // const ageLimit = 18;

  // const calAge = (x: number, y: number): number => {
  //   return x + y;
  // };

  function alertObjNAme(name: string) {
    alert(name);
  }

  interface obj {
    id: number;
    name: string;
    age: number;
    condition: boolean;
  }

  const firstObject: obj = {
    id: 1,
    name: "Ejhirooghene",
    age: 37,
    condition: true,
  };

  const SecondObject: obj = {
    id: 2,
    name: "ayoola",
    age: 45,
    condition: false,
  };

  const thirdObject: obj = {
    id: 3,
    name: "damian",
    age: 30,
    condition: true,
  };

  const newArray: obj[] = [firstObject, SecondObject, thirdObject];

  return (
    <>
      <h1>New Html file</h1>
      {newArray &&
        newArray.map((ob) => {
          return (
            <ol
              key={ob.id}
              style={{
                borderRadius: "20px",
                background: "red",
                color: "white",
                padding: "10px",
              }}
            >
              <li>{ob.name}</li>
              <li>{ob.age}</li>
              <button
                onClick={() => alertObjNAme(ob.name)}
                disabled={!ob.condition}
              >
                Click ME for surprise
              </button>
            </ol>
          );
        })}

      <ExternalList />
    </>
  );
};

export default App;
