import React from 'react';
import styled from 'styled-components';

const AboutWrapper = styled.div`
  padding: 30px 40px;
  img {
    display: inline-block;
    image-rendering: pixelated;
    width: 60px;
    padding: 10px;
    margin-right: 25px;
    border: 2px solid;
    border-color: ${props => props.theme.trim};
    transition: border-color 0.5s;
  }
  h1 {
    display: inline-block;
    width: 260px;
    margin: 0;
    padding: 5px 0;
  }
`;

function About() {
  return (
    <AboutWrapper>
      <img alt="Simeon Lees" src="/img/mugshot.png" />
      <p>Hi! I'm Simeon Lees.</p>
      <p>
        I'm a software engineer based in Dublin. Find me on{' '}
        <a
          href="https://uk.linkedin.com/in/simeon-lees-3b68a2a1"
          target="_blank"
        >
          LinkedIn
        </a>{' '}
        or{' '}
        <a href="https://github.com/sim8" target="_blank">
          GitHub
        </a>
        .
      </p>
    </AboutWrapper>
  );
}

export default About;
