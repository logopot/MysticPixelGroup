import styled from "styled-components";

export const StyledLinkLabel = styled.a`
  text-transform: uppercase;
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 2px;
  position: relative;
  text-decoration: none;
  display: inline-block;
  color: ${(props) => props.theme.textColor};
  padding: 0 1px;
  transition: color ease 0.3s;

  &:hover {
    color: ${(props) => props.theme.accentColor};
  }

  &::before,
  &::after {
    content: "";
    position: absolute;
    background-color: ${(props) => props.theme.accentColor};
    z-index: -1;
    height: 5%;
  }

  &::before {
    width: 0%;
    left: 0;
    bottom: -5px;
    transition: width ease 0.4s;
  }

  &::after {
    width: 100%;
    left: 0;
    bottom: -5px;
    transition: all ease 0.6s;
  }

  &:hover::before {
    width: 100%;
  }

  &:hover::after {
    left: 100%;
    width: 0%;
    transition: all ease 0.2s;
  }
`;
