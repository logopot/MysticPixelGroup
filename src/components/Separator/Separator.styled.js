import styled, { css } from "styled-components";

export const SeparatorDiv = styled.div`
  height: 1px;

  ${(props) =>
    props.variant === "minusMargin" &&
    css`
      margin-top: 60px;

      @media (min-width: 992px) {
        margin-top: -180px;
      }
    `}

  ${(props) =>
    props.variant === "plusMargin" &&
    css`
      margin-top: 80px;
    `}
`;
