import styled from "styled-components";
import { breakpoints } from "../../themes/commonTheme";

export const StyledNav = styled.nav`
  #menu__toggle {
    opacity: 0;
  }

  #menu__toggle:checked ~ .menu__btn > span {
    transform: rotate(-45deg);
  }

  #menu__toggle:checked ~ .menu__btn > span::before {
    top: 0;
    transform: rotate(0);
  }

  #menu__toggle:checked ~ .menu__btn > span::after {
    top: 0;
    transform: rotate(-90deg);
  }

  #menu__toggle:checked ~ .menu__box {
    visibility: visible;
    right: 0;
  }

  .menu__btn {
    display: flex;
    align-items: center;
    position: fixed;
    top: 30px;
    right: 20px; /* Change from left: 20px to right: 20px */

    width: 52px;
    height: 26px;

    cursor: pointer;
    z-index: 1;

    ${breakpoints.up("sm")} {
      top: 40px;
    }
  }

  .menu__btn > span,
  .menu__btn > span::before,
  .menu__btn > span::after {
    display: block;
    position: absolute;

    width: 100%;
    height: 2px;

    background-color: ${(props) => props.theme.accentColor};

    transition-duration: 0.25s;
  }

  .menu__btn > span::before {
    content: "";
    top: -8px;
  }

  .menu__btn > span::after {
    content: "";
    top: 8px;
  }

  .menu__item {
    display: block;
    padding: 12px 24px;

    color: ${(props) => props.theme.textColor};

    font-size: 20px;

    text-decoration: none;

    transition-duration: 0.25s;
    text-transform: uppercase;
  }

  .menu__item:hover {
    color: ${(props) => props.theme.accentColor};
  }
`;

export const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;

  position: fixed;
  visibility: hidden;
  top: 0;
  right: -100%; /* Change from left: -100% to right: -100% */

  width: 100%;
  height: 100%;

  margin: 0;
  padding: 80px 0;

  list-style: none;

  background-color: ${(props) => props.theme.navBarBgColor};

  transition-duration: 0.25s;

  li {
    display: flex;
    flex-grow: 0;
  }

  ${breakpoints.up("sm")} {
    width: 560px;
  }
`;

export const StyledDiv = styled.div`
  position: absolute;
`;

export const StyledLogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  img {
    width: 60px;

    ${breakpoints.up("sm")} {
      width: 70px;
    }
  }

  span {
    display: flex;
    color: ${(props) => props.theme.textColor};
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 2px;
    width: 130px;
    font-size: 15px;
  }
`;
