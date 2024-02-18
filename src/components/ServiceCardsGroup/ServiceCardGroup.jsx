import React from "react";
import ServiceCard from "./ServiceCard/ServiceCard";
import { Col, Row } from "react-bootstrap";
import {
  CiBezier,
  CiGrid42,
  CiMicrophoneOn,
  CiWavePulse1,
} from "react-icons/ci";
import MainTitle from "../MainTitle/MainTitle";

const ServiceCardGroup = () => {
  return (
    <>
      <Row>
        <Col>
          <MainTitle title="Our services" />
        </Col>
      </Row>
      <Row>
        <Col sm={6} md={6} lg={3}>
          <ServiceCard
            iconName={<CiGrid42 />}
            titleNum="01"
            title="Development"
          />
        </Col>
        <Col sm={6} md={6} lg={3}>
          <ServiceCard
            iconName={<CiMicrophoneOn />}
            titleNum="02"
            title="Marketing"
          />
        </Col>
        <Col sm={6} md={6} lg={3}>
          <ServiceCard
            iconName={<CiBezier />}
            titleNum="03"
            title="UI Design"
          />
        </Col>
        <Col sm={6} md={6} lg={3}>
          <ServiceCard
            iconName={<CiWavePulse1 />}
            titleNum="04"
            title="Data & Analytics"
          />
        </Col>
      </Row>
    </>
  );
};

export default ServiceCardGroup;
