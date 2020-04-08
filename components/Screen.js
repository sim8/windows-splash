import React, { useState } from 'react';
import styled from 'styled-components';
import Taskbar from './Taskbar';
import StartMenu from './StartMenu';
import Window from './Window';
import Programs from './programs';
import useWindows from '../hooks/useWindows';

const ScreenWrapper = styled.div`
  width: 800px;
  height: 600px;
  overflow: hidden;
  position: relative;
  outline: 2px solid ${props => props.theme.trim};
  transition: outline 0.5s;
`;

const programs = {
  ABOUT: Programs.About,
  SETTINGS: Programs.Settings,
  PROGRAMS: Programs.Programs,
};

function Screen({ setTheme }) {
  const [windows, dispatch] = useWindows();
  const [startMenuOpen, setStartMenuOpen] = useState(false);
  const windowElements = windows.map(window => {
    const { id } = window;
    const Program = programs[id];
    return (
      <Window
        key={id}
        setPos={pos => dispatch({ type: 'DRAG', id, pos })}
        onClose={() => dispatch({ type: 'CLOSE', id })}
        onMouseDown={() => dispatch({ type: 'BRING_TO_FRONT', id })}
        {...window}
      >
        <Program setTheme={setTheme} />
      </Window>
    );
  });
  return (
    <ScreenWrapper>
      {windowElements}
      <Taskbar
        windows={windows}
        onStartClick={() => setStartMenuOpen(!startMenuOpen)}
        onTaskClick={null}
      />
      {startMenuOpen && (
        <StartMenu
          programs={programs}
          onProgramClick={id => {
            setStartMenuOpen(false);
            dispatch({ type: 'OPEN', id });
          }}
        />
      )}
    </ScreenWrapper>
  );
}

export default Screen;
