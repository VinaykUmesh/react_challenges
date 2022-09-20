import React, { useState } from "react";

import  ClassComponent  from "./components/ClassComponent";
import FunctionalComponent from "./components/FunctionalComponent"

export const ThemeContext = React.createContext();

const App =() => {
  const [darkTheme, setDarkTheme] = useState(true)
  var name ='umesh'
    return (
      <>
      <ThemeContext.Provider value={{darkTheme, name, value : 'mani'}}>
        <button onClick={() => setDarkTheme(ps => !ps)}>toggle</button>
        <ClassComponent/>
        <FunctionalComponent/>
      </ThemeContext.Provider>
      </>
    );
}

export default App;
