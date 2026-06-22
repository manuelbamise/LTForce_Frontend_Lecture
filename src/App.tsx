const App = () => {
  const age = 18;
  const ageLimit = 18;

  const calAge = (x: number, y: number): number => {
    return x + y;
  };

  return (
    <>
      <h1>New Html file</h1>
      {age} <br />
      {ageLimit} <br />
      {calAge(age, ageLimit)}
      {age < ageLimit ? (
        <p>Minors don't have access to this site</p>
      ) : (
        <p>You can view this site freely</p>
      )}
    </>
  );
};

export default App;
