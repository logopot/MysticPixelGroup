import Router from "./Router";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "../src/components/Nav/Nav";
import background from "./assets/body-bg/body-bg.jpg";
import Footer from "./components/Footer/Footer";
import { Container } from "react-bootstrap";

const App = () => {
  return (
    <>
      <div
        className="body"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.7) 5%, rgba(0, 0, 0, 0.95) 50%), url(${background})`,
        }}
      >
        <div className="vertical-line"></div>
        <Container fluid className="p-0">
          <Nav />
          <Router />
          <Footer />
        </Container>
      </div>
    </>
  );
};

export default App;
