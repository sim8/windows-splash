import React, { useContext } from "react";
// import styled from "styled-components";
import { ThemeContext } from "styled-components";
import Themes from "../../constants/themes";

function Settings({ setTheme, ...props }) {
  const themeContext = useContext(ThemeContext);
  // console.log(Themes);
  // debugger;
  Object.keys(Themes).forEach(t =>
    console.log(Themes[t], themeContext, Themes[t] === themeContext)
  );
  return (
    <div>
      <h1>Settings</h1>
      <ul>
        {Object.keys(Themes).map(key => (
          <li key={key} onClick={() => setTheme(Themes[key])}>
            {key === themeContext.id ? "X" : "O"}
            {key}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Settings;
