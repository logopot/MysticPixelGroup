import React from "react";

import { Col, Row } from "react-bootstrap";
import { ImageContainer, StyledLabel, StyledWrapper } from "./AboutInfo.styled";
import image from "../../assets/about.jpg";
import Label from "../Label/Label";

const AboutInfo = () => {
  return (
    <Row>
      <Col lg={3} className="d-flex">
        <ImageContainer>
          <img className="img-fluid" src={image} alt="slika" />
        </ImageContainer>
      </Col>
      <Col lg={9} className="d-flex">
        <StyledWrapper>
          <StyledLabel tag="h1" text="Crafting Digital Excellence" />
          <p className="mt-3 mb-5">
            We breathe life into digital dreams. Our passionate team of web
            artisans combines creativity, code, and coffee to build remarkable
            online experiences.
          </p>

          <Row className="mb-3 mb-md-5">
            <Col md={6}>
              <StyledLabel
                className="mb-3"
                tag="h4"
                text="Innovation at the Core"
              />
              <Label
                tag="p"
                text="We thrive on pushing boundaries. From
                  elegant websites to robust applications, we infuse innovation
                  into every pixel and line of code."
              />
            </Col>

            <Col md={6}>
              <StyledLabel
                className="mb-3"
                tag="h4"
                text="Collaboration, Not Just Code"
              />
              <Label
                tag="p"
                text="We're not just developers; we're
                  your partners. We listen, strategize, and co-create solutions
                  that resonate with your vision."
              />
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <StyledLabel
                className="mb-3"
                tag="h4"
                text="Craftsmanship Matters"
              />
              <Label
                tag="p"
                text="Our obsession with clean code and
                  pixel-perfect designs ensures seamless user journeys. We
                  believe in quality over shortcuts."
              />
            </Col>

            <Col md={6}>
              <StyledLabel
                className="mb-3"
                tag="h4"
                text="End-to-End Solutions"
              />
              <Label
                tag="p"
                text="From wireframes to launch day, we handle
                  it all. Web development, mobile apps, e-commerce—our toolbox
                  is vast."
              />
            </Col>
          </Row>
        </StyledWrapper>
      </Col>
    </Row>
  );
};

export default AboutInfo;
