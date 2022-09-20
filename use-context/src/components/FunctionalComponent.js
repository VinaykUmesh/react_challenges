import React, { useContext } from "react";
import { ThemeContext } from "../App";

function FunctionalComponent({name}) {
  const { darkTheme } = useContext(ThemeContext);
  const themeStyles = {
      backgroundColor: darkTheme ? "#373737" : "tomato",
      color: !darkTheme ? "#373737" : "tomato",
      padding: "2rem",
      margin: "2rem"
  }
  return (
    <div style={themeStyles}>
      functional component
    </div>
  );
}

export default FunctionalComponent;
