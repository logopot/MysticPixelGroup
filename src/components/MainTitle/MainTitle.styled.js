import styled from "styled-components";

export const StyledMainTitle = styled.h1`
  font-size: 30px;
  margin: 30px 0 70px;
  color: ${(props) => props.theme.textColor};

  @media (min-width: 992px) {
    font-size: 50px;
  }
`;
