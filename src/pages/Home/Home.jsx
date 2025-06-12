import { Container } from "react-bootstrap";
import Hero from "../../components/Hero/Hero";
import AboutInfo from "../../components/AboutInfo/AboutInfo";
const Home = () => {
  return (
    <>
      <Container fluid className="p-0">
        <Hero />
      </Container>
      <Container className="px-4">
        <AboutInfo />
      </Container>
    </>
  );
};

export default Home;
