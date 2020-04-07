import React from 'react';
import styled from 'styled-components';

const TaskbarWrapper = styled.div`
  width: 100%;
  height: 40px;
  bottom: 0;
  position: absolute;
  outline: 2px solid ${props => props.theme.trim};
  background-color: ${props => props.theme.main};
  transition: outline 0.5s, background-color 0.5s;
`;

const StartButton = styled.div`
  width: 97px;
  height: 100%;
  left: 0;
  line-height: 40px;
  text-align: center;
  cursor: pointer;
  position: absolute;
  outline: 2px solid ${props => props.theme.trim};
  transition: outline 0.5s;
  &:hover {
    background-color: ${props => props.theme.trim};
    color: ${props => props.theme.main};
  }
`;

function Taskbar({ onStartClick }) {
  return (
    <TaskbarWrapper>
      <StartButton role="button" onClick={onStartClick}>
        START
      </StartButton>
    </TaskbarWrapper>
  );
}

export default Taskbar;
