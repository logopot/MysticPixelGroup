import { Container } from "react-bootstrap";
import Hero from "../../components/Hero/Hero";
import ServiceCardGroup from "../../components/ServiceCardsGroup/ServiceCardGroup";
import Separator from "../../components/Separator/Separator";
const Home = () => {
  return (
    <>
      <Container fluid className="p-0">
        <Hero />
      </Container>
      <Container className="p-3">
        <Separator variant="plusMargin" />
        <ServiceCardGroup />
      </Container>
    </>
  );
};

export default Home;
