import React from "react";
import { StyledLogoWrapper, StyledNav } from "./Nav.styled";
import { Col, Row } from "react-bootstrap/esm";
import logo from "../../assets/logo/logo.webp";
import background from "../../assets/body-bg/body-bg.jpg";

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
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${background})`,
                backgroundSize: "cover",
              }}
            >
              <a href="/">
                <li>Home</li>
              </a>
              <a href="/">
                <li>About</li>
              </a>
              <a href="/">
                <li>Info</li>
              </a>
              <a href="/">
                <li>Contact</li>
              </a>
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
