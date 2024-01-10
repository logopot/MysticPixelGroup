import { Col, Row } from "react-bootstrap/esm";
import MainTitle from "../../components/MainTitle/MainTitle";
const Home = () => {
  return (
    <Row>
      <Col md={{ span: 8, offset: 2 }}>
        <MainTitle title="Digital design and development agency" />
      </Col>
    </Row>
  );
};

export default Home;
