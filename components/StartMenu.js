import React from 'react';
import styled from 'styled-components';

const StartMenuWrapper = styled.div`
  width: 260px;
  height: 300px;
  bottom: 42px;
  position: absolute;
  outline: 2px solid ${props => props.theme.trim};
  background-color: ${props => props.theme.main};
  transition: outline 0.5s, background-color 0.5s;
  box-sizing: border-box;
  padding: 5px;
`;

const MenuItem = styled.div`
  padding-left: 8px;
  cursor: pointer;
  &:hover {
    background-color: ${props => props.theme.trim};
    color: ${props => props.theme.main};
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
