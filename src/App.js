import React from "react";
import Screen from "./components/Screen";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const AppWrapper = styled.div`
  background-color: #f00;
  height: 100vh;
  font-family: "Space Mono", monospace;
  color: white;
  font-size: 22px;
`;

const ScreenWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <AppWrapper>
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <ScreenWrapper>
                <Screen />
              </ScreenWrapper>
            )}
          />
          {/* 404 */}
        </Switch>
      </Router>
    </AppWrapper>
  );
}

export default App;
