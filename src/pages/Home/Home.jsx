import { Col, Container, Row } from "react-bootstrap";
import ProductCard from "../../components/ProductCard/ProductCard";
import Hero from "../../components/Hero/Hero";
const Home = () => {
  return (
    <>
      <Container fluid className="p-0">
        <Hero />
      </Container>
      <Container>
        <Row className="mt-5">
          <Col>
            <ProductCard />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
