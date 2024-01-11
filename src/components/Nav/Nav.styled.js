import styled from "styled-components";

export const StyledNav = styled.nav`
  #menuToggle {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 50px;
    right: 30px;
    z-index: 1;
    user-select: none;
    width: 50px;
  }

  #menuToggle a {
    text-decoration: none;
    color: ${(props) => props.theme.textColor};

    transition: color 0.3s ease;
  }

  #menuToggle a:hover {
    color: ${(props) => props.theme.accentColor};
  }

  #menuToggle input {
    display: block;
    width: 60px;
    height: 32px;
    position: absolute;
    top: -7px;
    left: -5px;

    cursor: pointer;

    opacity: 0;
    z-index: 2;

    -webkit-touch-callout: none;
  }

  #menuToggle span {
    display: block;
    width: 50px;
    height: 2px;
    margin-bottom: 5px;
    position: relative;
    background: ${(props) => props.theme.textColor};
    border-radius: 3px;

    z-index: 1;

    transform-origin: 20px 0px;

    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
      background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
  }

  #menuToggle span:first-child {
    transform-origin: 0% 0%;
  }

  #menuToggle span:nth-last-child(2) {
    transform-origin: 0% 100%;
  }

  #menuToggle input:checked ~ span {
    opacity: 1;
    transform: rotate(45deg) translate(-2px, -1px);
    background: ${(props) => props.theme.accentColor};
  }

  #menuToggle input:checked ~ span:nth-last-child(3) {
    opacity: 0;
    transform: rotate(0deg) scale(0.2, 0.2);
  }

  #menuToggle input:checked ~ span:nth-last-child(2) {
    transform: rotate(-45deg) translate(0, 5px);
  }

  #menu {
    position: absolute;
    left: -154px;
    width: 304px;
    margin: -80px 0 0 -50px;
    padding: 50px;
    padding-top: 125px;
    list-style-type: none;
    -webkit-font-smoothing: antialiased;
    transform-origin: 0% 0%;
    transform: translate(104%, 0);
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
  }

  #menu li {
    padding: 10px 0;
  }

  /*
 * And let's slide it in from the left
 */
  #menuToggle input:checked ~ ul {
    transform: none;
  }
`;

export const StyledLogoWrapper = styled.div`
  margin-top: 25px;
  display: flex;
  align-items: center;
  gap: 10px;

  img {
    width: 70px;
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
