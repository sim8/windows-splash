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
  background-color: ${props => (props.selected ? props.theme.trim : "initial")};
  outline: 2px solid ${props => props.theme.trim};
  transition: outline 0.5s, background-color 0.5s;
  > div {
    top: -3px;
    left: -2px;
  }
`;

function Settings({ setTheme, ...props }) {
  const { id: selected } = useContext(ThemeContext);
  return (
    <div>
      <ThemeList>
        {Object.keys(Themes).map(key => (
          <li key={key} onClick={() => setTheme(Themes[key])}>
            <Checkbox selected={key === selected} />
            {key}
          </li>
        ))}
      </ThemeList>
    </div>
  );
}

export default Settings;
