import React from "react";
import ServiceCard from "./ServiceCard/ServiceCard";
import { Col, Row } from "react-bootstrap";
import { PiCode, PiMegaphone, PiPenNib, PiChartLine } from "react-icons/pi";
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
            iconName={<PiCode />}
            titleNum="01"
            title="Development"
          />
        </Col>
        <Col sm={6} md={6} lg={3}>
          <ServiceCard
            iconName={<PiMegaphone />}
            titleNum="02"
            title="Marketing"
          />
        </Col>
        <Col sm={6} md={6} lg={3}>
          <ServiceCard
            iconName={<PiPenNib />}
            titleNum="03"
            title="UI Design"
          />
        </Col>
        <Col sm={6} md={6} lg={3}>
          <ServiceCard
            iconName={<PiChartLine />}
            titleNum="04"
            title="Data & Analytics"
          />
        </Col>
      </Row>
    </>
  );
};

export default ServiceCardGroup;
