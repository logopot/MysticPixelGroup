import { Col, Container, Row } from "react-bootstrap";
import ProductCard from "../../components/ProductCard/ProductCard";
import Hero from "../../components/Hero/Hero";
import ServiceCardGroup from "../../components/ServiceCardsGroup/ServiceCardGroup";
import Separator from "../../components/Separator/Separator";
const Home = () => {
  return (
    <>
      <Container fluid className="p-0">
        <Hero />
      </Container>
      <Container>
        <Separator variant="plusMargin" />
        <Row className="mt-5">
          <ServiceCardGroup />
        </Row>
      </Container>
    </>
  );
};

export default Home;
