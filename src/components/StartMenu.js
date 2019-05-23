import React from "react";
import styled from "styled-components";

const StartMenuWrapper = styled.div`
  width: 260px;
  height: 300px;
  bottom: 40px;
  position: absolute;
  outline: 2px solid white;
  background-color: #f00;
`;

const MenuItem = styled.div`
  &:hover {
    background-color: white;
    color: red;
    cursor: pointer;
  }
`;

function StartMenu({ programs, onProgramClick }) {
  return (
    <StartMenuWrapper>
      {Object.keys(programs).map(id => (
        <MenuItem key={id} onClick={() => onProgramClick(id)}>
          {id}
        </MenuItem>
      ))}
    </StartMenuWrapper>
  );
}

export default StartMenu;
