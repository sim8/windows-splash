import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "styled-components";
import Themes from "../../constants/themes";
import XIcon from "../display/XIcon";

const ThemeList = styled.ul`
  list-style-type: none;
  li {
    cursor: pointer;
    position: relative;
  }
`;

const Checkbox = styled.div`
  width: 12px;
  height: 12px;
  display: inline-block;
  position: absolute;
  left: -25px;
  top: 11px;
  outline: 2px solid ${props => props.theme.trim};
  transition: outline 0.5s;
  > div {
    top: -3px;
    left: -2px;
  }
`;

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
      <ThemeList>
        {Object.keys(Themes).map(key => (
          <li key={key} onClick={() => setTheme(Themes[key])}>
            <Checkbox>{key === themeContext.id ? <XIcon /> : null}</Checkbox>
            {key}
          </li>
        ))}
      </ThemeList>
    </div>
  );
}

export default Settings;
