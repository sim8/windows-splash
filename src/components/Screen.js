import React, { useReducer, useState } from "react";
import styled from "styled-components";
import Taskbar from "./Taskbar";
import StartMenu from "./StartMenu";
import Window from "./Window";
import Programs from "./programs";

const ScreenWrapper = styled.div`
  width: 800px;
  height: 600px;
  overflow: hidden;
  position: relative;
  outline: 2px solid white;
`;

const programs = {
  ABOUT: Programs.About
};

function generateInitialPos() {
  return [
    Math.floor(Math.random() * 200 + 1),
    Math.floor(Math.random() * 150 + 1)
  ];
}

function windowsReducer(state, action) {
  switch (action.type) {
    case "OPEN": {
      const [xPos, yPos] = action.initialPos;
      return [
        ...state,
        {
          xPos,
          yPos,
          id: action.id
        }
      ];
    }
    case "CLOSE":
      return state.filter(window => window.id !== action.id);
    case "DRAG": {
      return state.map(window => {
        if (window.id === action.id) {
          const [xPos, yPos] = action.pos;
          return {
            ...window,
            xPos,
            yPos
          };
        }
        return window;
      });
    }
    default:
      return state;
  }
}

function Screen() {
  const [windows, dispatch] = useReducer(windowsReducer, []);
  const [startMenuOpen, setStartMenuOpen] = useState(false);
  const windowElements = windows.map(window => {
    const { id } = window;
    const Program = programs[id];
    return (
      <Window
        key={id}
        setPos={pos => dispatch({ type: "DRAG", id, pos })}
        onClose={() => dispatch({ type: "CLOSE", id })}
        {...window}
      >
        <Program />
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
            dispatch({ type: "OPEN", id, initialPos: generateInitialPos() });
          }}
        />
      )}
    </ScreenWrapper>
  );
}

export default Screen;
