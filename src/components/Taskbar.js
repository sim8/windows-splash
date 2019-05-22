import React from "react";
import styled from "styled-components";

const TaskbarWrapper = styled.div`
  width: 100%;
  height: 40px;
  bottom: 0;
  position: absolute;
  outline: 2px solid white;
  background-color: #f00;
`;

const StartButton = styled.div`
  width: 80px;
  height: 100%;
  left: 0;
  position: absolute;
  outline: 2px solid white;
`;

function Taskbar({ onStartClick }) {
  return (
    <TaskbarWrapper>
      <StartButton role="button" onClick={onStartClick}>
        Start
      </StartButton>
    </TaskbarWrapper>
  );
}

export default Taskbar;
