import React from "react";
import img from "../../assets/logo/logo.webp";
import ServiceCard from "./ServiceCard/ServiceCard";
import { Col, Row } from "react-bootstrap";

const ServiceCardGroup = () => {
  return (
    <Row>
      <Col md={3}>
        <ServiceCard icon={img} titleNum="01" title="Development" />
      </Col>
      <Col md={3}>
        <ServiceCard icon={img} titleNum="02" title="Marketing" />
      </Col>
      <Col md={3}>
        <ServiceCard icon={img} titleNum="03" title="UI Design" />
      </Col>
      <Col md={3}>
        <ServiceCard icon={img} titleNum="04" title="Data & Analitics" />
      </Col>
    </Row>
  );
};

export default ServiceCardGroup;
