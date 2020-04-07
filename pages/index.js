import React, { useState } from "react";
import Head from "next/head";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import Themes from "../constants/themes";
import Screen from "../components/Screen";

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
  }
`;

const AppWrapper = styled.div`
  background-color: ${(props) => props.theme.main};
  height: 100vh;
  font-family: "Space Mono", monospace;
  color: ${(props) => props.theme.trim};
  transition: color 0.5s, background-color 0.5s;
  font-size: 22px;
`;

const ScreenWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Home = () => {
  const [theme, setTheme] = useState(Themes.STANDARD);
  return (
    <ThemeProvider theme={theme}>
      <Head>
        {/* TODO */}
        <title>Simeon Lees</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyles />
      <AppWrapper>
        <ScreenWrapper>
          <Screen setTheme={setTheme} />
        </ScreenWrapper>
        )} />
      </AppWrapper>
    </ThemeProvider>
  );
};

export default Home;
