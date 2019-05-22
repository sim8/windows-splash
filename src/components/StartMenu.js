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

function StartMenu({ programs, onProgramClick }) {
  return (
    <StartMenuWrapper>
      {Object.keys(programs).map(id => (
        <div key={id} onClick={() => onProgramClick(id)}>
          {id}
        </div>
      ))}
    </StartMenuWrapper>
  );
}

export default StartMenu;
