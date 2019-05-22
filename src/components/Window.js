import React, { useState } from "react";
import styled from "styled-components";

const WindowWrapper = styled.div`
  width: 500px;
  height: 350px;
  position: absolute;
  outline: 2px solid white;
  background-color: #f00;
`;

const Header = styled.div`
  width: 100%;
  height: 30px;
  position: absolute;
  outline: 2px solid white;
  top: 0;
`;

const CloseButton = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  outline: 2px solid white;
  right: 0;
`;

function Window({ children, xPos: savedXPos, yPos: savedYPos, setPos }) {
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
        <CloseButton>X</CloseButton>
      </Header>
      {children}
    </WindowWrapper>
  );
}

export default Window;
