import styled from "styled-components";

const XIcon = styled.div`
  right: 8px;
  top: 6px;
  width: 16px;
  height: 16px;
  position: absolute;
  &:before,
  &:after {
    position: absolute;
    left: 7px;
    content: " ";
    height: 18px;
    width: 2px;
    background-color: ${props => props.theme.trim};
    transition: background-color 0.5s;
  }
  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
`;

export default XIcon;
