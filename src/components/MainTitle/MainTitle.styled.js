import styled from "styled-components";
import { breakpoints } from "../../themes/commonTheme";

export const StyledMainTitle = styled.h1`
  font-size: 30px;
  font-weight: 600;
  margin: 0 0 70px;
  color: ${(props) => props.theme.textColor};

  ${breakpoints.up("lg")} {
    font-size: 50px;
  }
`;
