import { Row } from "react-bootstrap/esm";
import logo from "../../assets/logo/logo.jpg";
const Home = () => {
  return (
    <Row>
      <Col>
        <img className="img-fluid" src={logo} alt="." />
      </Col>
    </Row>
  );
};

export default Home;
