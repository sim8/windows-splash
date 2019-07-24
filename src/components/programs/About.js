import React from "react";
import styled from "styled-components";

const AboutWrapper = styled.div`
  background-color: white;
  color: black;
  font-family: "times new roman", "sans-serif";
  height: 100%;
  h1 {
    margin: 0;
    padding: 5px 0;
  }
`;

function About() {
  return (
    <AboutWrapper>
      <h1>Hi! I'm Simeon Lees.</h1>
      <p>I'm a software engineer based in Dublin.</p>
      <p>
        Contact me on{" "}
        <a
          href="https://uk.linkedin.com/in/simeon-lees-3b68a2a1"
          target="_blank"
        >
          LinkedIn
        </a>
        .
      </p>
    </AboutWrapper>
  );
}

export default About;
