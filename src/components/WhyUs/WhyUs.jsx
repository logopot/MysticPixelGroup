import React from "react";
import { StyledContainer } from "./WhyUs.styled";
import MainTitle from "../MainTitle/MainTitle";
import Label from "../Label/Label";
import { Col, Row } from "react-bootstrap";

const WhyUs = () => {
  return (
    <>
      <MainTitle title="Why choose us" />
      <Row>
        <Col>
          <StyledContainer href="https://logopot.rs">
            <Label tag="h2" className="mb-4" text="Creative design" />
            <Label
              tag="p"
              text="We create stunning and responsive web designs that showcase your brand and vision."
            />
          </StyledContainer>
        </Col>
        <Col>
          <StyledContainer href="https://logopot.rs">
            <Label tag="h2" className="mb-4" text="Expert developers" />
            <Label
              tag="p"
              text="We have a team of skilled and experienced developers who can handle any project with ease."
            />
          </StyledContainer>
        </Col>
        <Col>
          <StyledContainer href="https://logopot.rs">
            <Label tag="h2" className="mb-4" text="Satisfied clients" />
            <Label
              tag="p"
              text="We deliver high-quality work that meets your expectations and earns your trust."
            />
          </StyledContainer>
        </Col>
      </Row>
    </>
  );
};

export default WhyUs;
