import React from "react";
// import styled from "styled-components";
import Themes from "../../constants/themes";

function Settings({ setTheme }) {
  return (
    <div>
      <h1>Settings</h1>
      <ul>
        {Object.keys(Themes).map(key => (
          <li key={key} onClick={() => setTheme(Themes[key])}>
            {key}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Settings;
