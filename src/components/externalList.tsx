import userObject from "./userObject.json";

const ExternalList = () => {
  function changeInColor(e: React.MouseEvent<HTMLButtonElement>) {
    e.currentTarget.style.backgroundColor = "lightgray";
  }

  function changeOutColor(e: React.MouseEvent<HTMLButtonElement>) {
    e.currentTarget.style.backgroundColor = "white";
  }

  function alertObjNAme(name: string) {
    alert(name);
  }

  interface obj {
    id: number;
    name: string;
    age: number;
    condition: boolean;
  }

  const newArray: obj[] = userObject;

  return (
    <>
      <p>Hello from the external component</p> <br />
      <div
        style={{
          margin: "auto",
          display: "flex",
          width: "50%",
          padding: "20px",
          backgroundColor: "gray",
          color: "black",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {" "}
        {newArray &&
          newArray.map((ob) => {
            return (
              <ol
                key={ob.id}
                style={{
                  width: "30%",
                  listStylePosition: "inside",
                  borderRadius: "10px",
                  background: "white",
                  padding: "10px",
                }}
              >
                <li>{ob.name}</li>
                <li>{ob.age}</li>
                <button
                  style={{
                    color: "black",
                    marginTop: "10px",

                    padding: "10px",
                    borderRadius: "5px",
                  }}
                  onMouseEnter={(e) => changeInColor(e)}
                  onMouseLeave={(e) => changeOutColor(e)}
                  onClick={() => alertObjNAme(ob.name)}
                  disabled={!ob.condition}
                >
                  Click ME for surprise
                </button>
              </ol>
            );
          })}{" "}
      </div>
    </>
  );
};

export default ExternalList;
