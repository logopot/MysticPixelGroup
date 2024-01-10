import Router from "./Router";
import "bootstrap/dist/css/bootstrap.min.css";

import { Container } from "react-bootstrap";

import background from "./assets/body-bg/body-bg.jpg";
import Nav from "./components/Nav/Nav";

const App = () => {
  return (
    <>
      <div
        className="body"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 1)), url(${background})`,
        }}
      >
        <div className="vertical-line"></div>
        <Container fluid>
          <Nav />
          <Router />
        </Container>
      </div>
    </>
  );
};

export default App;
