import styled from "styled-components";
import { breakpoints } from "../../themes/commonTheme";
import Label from "../Label/Label";

export const ImageContainer = styled.div`
  display: flex;
  border-radius: 20px;
  overflow: hidden;

  ${breakpoints.down("lg")} {
    display: block;
    height: 50px;
    margin-bottom: 30px;
  }
`;

export const StyledWrapper = styled.div`
  padding: 60px;
  display: flex;
  flex-direction: column;
  align-self: center;
  ${breakpoints.down("lg")} {
    padding: unset;
  }
`;

export const StyledLabel = styled(Label)`
  color: ${(props) => props.theme.accentColor};
`;
