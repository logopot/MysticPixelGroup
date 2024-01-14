import styled from "styled-components";

export const StyledMainTitle = styled.h1`
  font-size: 60px;
  margin: 50px 0 70px;
  font-weight: 600;
  color: ${(props) => props.theme.textColor};

  @media (min-width: 992px) {
    font-size: 90px;
    margin: 100px 0 150px;
  }
`;
