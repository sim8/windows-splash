import React from "react";
import Screen from "./components/Screen";
import styled from "styled-components";

const AppWrapper = styled.div`
  background-color: #f00;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Space Mono", monospace;
  color: white;
  font-size: 22px;
`;

function App() {
  return (
    <AppWrapper>
      <Screen />
    </AppWrapper>
  );
}

export default App;
