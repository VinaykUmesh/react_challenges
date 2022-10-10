import { useReducer } from "react";
import "./App.css";
import reducer from "./reducer";

function App() {
  const [state, dispatch] = useReducer(reducer, { count: 10 });

  function increment() {
    dispatch({
      type: "INCREMENT"
    });
  }

  function decrement() {
    dispatch({
      type: "DECREMENT"
    });
  }

  return (
    <div className="App">
      <button onClick={increment}>+</button>
      <h3>{state.count}</h3>
      <button onClick={decrement}>-</button>
    </div>
  );
}

export default App;
