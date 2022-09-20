import React, { Component } from "react";
import { ThemeContext } from "../App";

export default class ClassComponent extends Component {
  themeStyles(dark) {
    return {
      backgroundColor: dark ? "#373737" : "tomato",
      color: !dark ? "#373737" : "tomato",
      padding: "2rem",
      margin: "2rem",
    };
  }
  render() {
    return (
      <ThemeContext.Consumer>
        {({darkTheme}) => {
          return <div style={this.themeStyles(darkTheme)}>class component</div>;
        }}
      </ThemeContext.Consumer>
    );
  }
}
