import { createGlobalStyle, css } from "styled-components";

export default createGlobalStyle`${css`
  body {
    font-family: "Plus Jakarta Sans", sans-serif;
    font-size: 16px;
    color: ${(props) => props.theme.textColor};
  }

  .container,
  .container-fluid {
    position: relative;
    z-index: 1;
  }

  a:hover {
    color: unset;
  }

  .active {
    color: ${(props) => props.theme.primaryColor} !important;
  }

  .sticky-navbar-nav {
    padding-left: 20px;
  }

  ::-webkit-scrollbar {
    width: 6px;
    background-color: ${(props) => props.theme.scrollBarBGColor};
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.scrollBarBGColorThumb};
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: ${(props) => props.theme.scrollBarBGColorThumbHover};
  }

  ::selection {
    background-color: ${(props) => props.theme.accentColor};
  }

  .body {
    position: relative;
    width: 100%;
    background-size: cover; /* Adjust the background size as needed */
    background-position: center; /* Adjust the background position as needed */
    background-repeat: no-repeat; /* Adjust the background repeat as needed */
    overflow: hidden;

    &::before,
    &::after {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      bottom: 0;
      width: 0.3px;
      background-color: ${(props) => props.theme.lineColor};
    }

    &::before {
      left: 20%;
    }

    &::after {
      left: 70%;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
  }

  h1 {
    font-size: 2.5rem;
    font-weight: bold;
    line-height: 1.2;
  }

  h2 {
    font-size: 2rem;
    font-weight: bold;
    line-height: 1.3;
  }

  h3 {
    font-size: 1.75rem;
    font-weight: bold;
    line-height: 1.4;
  }

  h4 {
    font-size: 1.5rem;
    font-weight: bold;
    line-height: 1.5;
  }

  h5 {
    font-size: 1.25rem;
    font-weight: bold;
    line-height: 1.6;
  }

  h6 {
    font-size: 1rem;
    font-weight: bold;
    line-height: 1.7;
  }

  /* Additional styles (optional) */
  p {
    font-size: 1rem; /* Default paragraph font size */
    line-height: 1.6;
  }
`}`;
