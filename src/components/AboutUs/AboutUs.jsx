import React from "react";
import bgImage from "../../assets/video/video.jpg";
import { StyledContainer } from "./AboutUs.styled";
import { Col, Container, Row } from "react-bootstrap";
import MainTitle from "../MainTitle/MainTitle";
import LinkLabel from "../LinkLabel/LinkLabel";

const AboutUs = () => {
  return (
    <StyledContainer
      fluid
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <Container>
        <Row>
          <Col sm={{ span: 7, offset: 4 }} md={{ span: 5, offset: 6 }}>
            <MainTitle title="Code your way to success with our dedicated development team." />
            <LinkLabel url="https://logopot.rs" label="Ready to innovate?" />
          </Col>
        </Row>
      </Container>
    </StyledContainer>
  );
};

export default AboutUs;
