import { createGlobalStyle, css } from "styled-components";

export default createGlobalStyle`${css`
  body {
    font-family: "Plus Jakarta Sans", sans-serif;
    font-size: 16px;
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
      background-color: #313131;
    }

    &::before {
      left: 20%;
    }

    &::after {
      left: 70%;
    }
  }
`}`;
