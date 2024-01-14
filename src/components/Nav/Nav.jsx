import React from "react";
import { StyledLogoWrapper, StyledNav } from "./Nav.styled";
import { Col, Row } from "react-bootstrap/esm";
import logo from "../../assets/logo/logo.webp";
import background from "../../assets/body-bg/body-bg-nav.jpg";

const Nav = () => {
  return (
    <Row>
      <Col>
        <StyledNav role="navigation">
          <div id="menuToggle">
            <input type="checkbox" />

            <span></span>
            <span></span>
            <span></span>

            <ul
              id="menu"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${background})`,
                backgroundSize: "cover",
              }}
            >
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">Games</a>
              </li>
              <li>
                <a href="/">Websites</a>
              </li>
              <li>
                <a href="/">Applications</a>
              </li>
              <li>
                <a href="/">Contact</a>
              </li>
            </ul>
          </div>
          <StyledLogoWrapper>
            <img src={logo} alt="logo" />
            <span>Mystic Pixel Group</span>
          </StyledLogoWrapper>
        </StyledNav>
      </Col>
    </Row>
  );
};

export default Nav;
