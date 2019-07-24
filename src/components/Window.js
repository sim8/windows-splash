import React, { useState } from "react";
import styled from "styled-components";
import XIcon from "./display/XIcon";

const WindowWrapper = styled.div`
  width: 500px;
  height: 350px;
  display: flex;
  flex-flow: column;
  position: absolute;
  outline: 2px solid ${props => props.theme.trim};
  background-color: ${props => props.theme.main};
  transition: outline 0.5s, background-color 0.5s;

  .window-content {
    flex: 1 1 auto;
  }
`;

const Header = styled.div`
  width: 100%;
  height: 30px;
  /* position: absolute; */
  /* flex: 0 1 auto; */
  outline: 2px solid ${props => props.theme.trim};
  transition: outline 0.5s;
  /* top: 0; */
`;

const CloseButtonWrapper = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  right: 0;
  &:hover {
    cursor: pointer;
  }
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Window({
  children,
  xPos: savedXPos,
  yPos: savedYPos,
  setPos,
  onClose
}) {
  const [dragStartPos, setDragStartPos] = useState(null);
  const [draggedDistance, setDraggedDistance] = useState([0, 0]);
  const xPos = savedXPos + draggedDistance[0];
  const yPos = savedYPos + draggedDistance[1];
  const onFinishDrag = () => {
    setDragStartPos(null);
    setDraggedDistance([0, 0]);
    setPos([xPos, yPos]);
  };
  return (
    <WindowWrapper
      xPos={xPos}
      yPos={yPos}
      style={{
        left: xPos,
        top: yPos
      }}
      onMouseMove={e =>
        dragStartPos &&
        setDraggedDistance([
          -(dragStartPos[0] - e.clientX),
          -(dragStartPos[1] - e.clientY)
        ])
      }
    >
      <Header
        onMouseDown={e => setDragStartPos([e.clientX, e.clientY])}
        onMouseUp={onFinishDrag}
        onMouseOut={() => dragStartPos && onFinishDrag()}
      >
        <CloseButtonWrapper onClick={onClose}>
          <XIcon />
        </CloseButtonWrapper>
      </Header>
      <div className="window-content">{children}</div>
    </WindowWrapper>
  );
}

export default Window;
