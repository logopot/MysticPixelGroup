import { Container } from "react-bootstrap";
import Hero from "../../components/Hero/Hero";
import ServiceCardGroup from "../../components/ServiceCardsGroup/ServiceCardGroup";
import Separator from "../../components/Separator/Separator";
import MyComponent from "../../components/AboutUs/AboutUs";
const Home = () => {
  return (
    <>
      <Container fluid className="p-0">
        <Hero />
      </Container>
      <Container className="px-3">
        <Separator variant="plusMargin" />
        <ServiceCardGroup />
      </Container>
      <Separator variant="plusMargin" />
      <MyComponent />
    </>
  );
};

export default Home;
