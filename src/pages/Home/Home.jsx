import { Container } from "react-bootstrap";
import Hero from "../../components/Hero/Hero";
import ServiceCardGroup from "../../components/ServiceCardsGroup/ServiceCardGroup";
import Separator from "../../components/Separator/Separator";
import AboutUs from "../../components/AboutUs/AboutUs";
import WhyUs from "../../components/WhyUs/WhyUs";
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
      <AboutUs />
      <Separator variant="plusMargin" />
      <Container>
        <WhyUs />
      </Container>
    </>
  );
};

export default Home;
