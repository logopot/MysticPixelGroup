import { Col, Row } from "react-bootstrap/esm";
import MainTitle from "../../components/MainTitle/MainTitle";
import ProductCard from "../../components/ProductCard/ProductCard";
const Home = () => {
  return (
    <>
      <Row>
        <Col>
          <MainTitle title="Game design and development agency" />
        </Col>
      </Row>
      <Row>
        <Col>
          <ProductCard />
        </Col>
      </Row>
    </>
  );
};

export default Home;
