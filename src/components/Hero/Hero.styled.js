import styled from "styled-components";
import background from "../../assets/hero/hero.jpg";
import { breakpoints } from "../../themes/commonTheme";

export const StyledSection = styled.section`
  width: 100vw;
  height: 100svh;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url("${background}") no-repeat top center;
    background-size: cover;
    animation: zoom 50s infinite alternate;
    animation-timing-function: linear;
    filter: brightness(95%);

    ${breakpoints.up("md")} {
      animation: zoom 100s infinite alternate;
    }
  }

  &::after {
    content: "";
    width: 100%;
    height: 150px;
    position: absolute;
    bottom: 0;
    left: 0;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(1, 1, 1, 1) 96%,
      rgba(255, 255, 257, 0) 100%
    );
  }

  @keyframes zoom {
    from {
      transform: scale(1.01);
    }

    to {
      transform: scale(1.5);
    }
  }
`;

export const StyledHeroInner = styled.div`
  position: absolute;
  bottom: 80px;
  left: 30px;
  z-index: 3;

  ${breakpoints.up("md")} {
    left: 80px;
  }
`;

export const StyledTitle = styled.h2`
  font-size: 32px;
  font-weight: bold;
  width: 230px;

  ${breakpoints.up("md")} {
    font-size: 82px;
    width: 590px;
  }
`;
