import React from "react";

const Example = () => {
  const [counter, setCounter] = React.useState(0);

  React.useEffect(() => {
    console.log("useEffect")
    setCounter(ps => ps - 1)
    return
  }, [counter]);

  return (
    <div>
      <h3>Counter : {counter}</h3>
      <button onClick={() => setCounter((ps) => ps + 1)}> + </button>
      <button onClick={() => setCounter((ps) => ps - 1)}> - </button>
    </div>
  );
};

export default Example;
