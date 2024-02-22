import styled from "styled-components";

export const StyledContainer = styled.a`
  position: relative;
  color: ${(props) => props.theme.textColor};
  border: 2px solid ${(props) => props.theme.accentColor};
  margin-bottom: 30px;
  border-radius: 40px;
  height: 200px;
  padding: 30px;
  background-color: black;
  display: flex;
  flex-direction: column;

  cursor: pointer;
  text-decoration: none;
  transition: transform 0.3s ease-in-out, background-color 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
    background-color: ${(props) => props.theme.accentColor};
    text-decoration: none;
    color: black;
  }
`;
