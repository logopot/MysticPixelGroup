import styled, { css } from "styled-components";
import { breakpoints } from "../../themes/commonTheme";

export const SeparatorDiv = styled.div`
  height: 1px;

  ${(props) =>
    props.variant === "minusMargin" &&
    css`
      margin-top: 60px;

      ${breakpoints.up("lg")} {
        margin-top: -180px;
      }
    `}

  ${(props) =>
    props.variant === "plusMargin" &&
    css`
      margin-top: 90px;
    `}
`;
