import styled from "styled-components";

export const StyledMainTitle = styled.h1`
  font-size: 40px;
  margin: 50px 0 70px;
  font-weight: 600;
  color: ${(props) => props.theme.textColor};

  @media (min-width: 769px) {
    font-size: 90px;
    max-width: 770px;
    margin: 100px 0 150px;
  }
`;