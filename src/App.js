import React, { useState } from "react";
import Screen from "./components/Screen";
import styled, { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Themes from "./constants/themes";

const AppWrapper = styled.div`
  background-color: ${props => props.theme.main};
  height: 100vh;
  font-family: "Space Mono", monospace;
  color: ${props => props.theme.trim};
  transition: color 0.5s, background-color 0.5s;
  font-size: 22px;
`;

const ScreenWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  const [theme, setTheme] = useState(Themes.STANDARD);
  return (
    <ThemeProvider theme={theme}>
      <AppWrapper>
        <Router>
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <ScreenWrapper>
                  <Screen setTheme={setTheme} />
                </ScreenWrapper>
              )}
            />
            {/* 404 */}
          </Switch>
        </Router>
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;
