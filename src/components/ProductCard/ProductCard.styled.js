import styled from "styled-components";

export const StyledCathegoryTag = styled.p`
  font-size: 16px;
  color: ${(props) => props.theme.textColor};
`;

export const StyledTitle = styled.h2`
  font-size: 40px;
  font-weight: 600;
  margin: 30px 0;
  transition: color 0.5s ease;

  @media (min-width: 992px) {
    font-size: 60px;
  }
`;

export const StyledTitleLink = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.textColor};

  &:hover > ${StyledTitle} {
    transition: color 0.5s ease;
    color: ${(props) => props.theme.accentColor};
  }
`;

export const StyledDescription = styled.p`
  margin: 30px 0;
  font-size: 16px;
  line-height: 1.8;
  color: ${(props) => props.theme.textColor};
`;

export const StyledLink = styled.a`
  position: relative;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 600;
  color: ${(props) => props.theme.accentColor};
  text-decoration: none;
  background-image: linear-gradient(
    to right,
    ${(props) => props.theme.accentColor},
    ${(props) => props.theme.accentColor} 50%,
    ${(props) => props.theme.textColor} 50%
  );
  background-size: 200% 100%;
  background-position: -100%;
  display: inline-block;
  padding: 5px 0;
  position: relative;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: all 0.3s ease-in-out;

  &::before {
    content: "";
    background: ${(props) => props.theme.accentColor};
    display: block;
    position: absolute;
    bottom: -3px;
    left: 0;
    width: 0;
    height: 1px;
    transition: all 0.3s ease-in-out;
  }

  &:hover {
    background-position: 0;
  }

  &:hover::before {
    width: 100%;
  }
`;

export const StyledImage = styled.img`
  transition: transform 0.5s ease;

  &:hover {
    transform: translateY(-4px);
  }
`;
