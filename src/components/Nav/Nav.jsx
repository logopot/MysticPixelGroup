import React from "react";
import {
  StyledLogoWrapper,
  StyledNav,
  StyledDiv,
  StyledUl,
} from "./Nav.styled";
import { Col, Row } from "react-bootstrap";
import logo from "../../assets/logo/logo.webp";
import StickyNavbar from "react-sticky-navbar";
import { useTheme } from "styled-components";

// const navBarBgColor = "#010109";

const Nav = () => {
  // const [menuOpen, setMenuOpen] = useState(false);

  // const handleMenuToggle = () => {
  //   setMenuOpen(!menuOpen);
  // };

  // // Apply 'overflow: hidden' to the body when menu is open
  // document.body.style.overflowY = menuOpen ? "hidden" : "auto";
  const theme = useTheme();

  return (
    <Row>
      <Col>
        <StickyNavbar stickyBackground={theme.navBarBgColor} showOnScrollDown>
          <StyledNav role="navigation">
            <StyledDiv className="hamburger-menu">
              <input
                type="checkbox"
                id="menu__toggle"
                // checked={menuOpen}
                // onChange={handleMenuToggle}
              />
              <label className="menu__btn" for="menu__toggle">
                <span></span>
              </label>

              <StyledUl className="menu__box">
                <li>
                  <a className="menu__item" href="/">
                    The gameplay
                  </a>
                </li>
                <li>
                  <a className="menu__item" href="/">
                    About MPG
                  </a>
                </li>
                <li>
                  <a className="menu__item" href="/">
                    History
                  </a>
                </li>
                <li>
                  <a className="menu__item" href="/">
                    Portfolio
                  </a>
                </li>
                <li>
                  <a className="menu__item" href="/">
                    Join
                  </a>
                </li>
                <li>
                  <a className="menu__item" href="/">
                    Contact
                  </a>
                </li>
              </StyledUl>
            </StyledDiv>
            <StyledLogoWrapper>
              <img src={logo} alt="logo" />
              <span>Mystic Pixel Group</span>
            </StyledLogoWrapper>
          </StyledNav>
        </StickyNavbar>
      </Col>
    </Row>
  );
};

export default Nav;
