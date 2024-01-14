import { Col, Row } from "react-bootstrap/esm";
import MainTitle from "../../components/MainTitle/MainTitle";
import {
  StyledDescription,
  StyledTitle,
  StyledUl,
} from "./ProductSinglePage.styled";
import prod1 from "../../assets/products/product1.jpg";
import prod2 from "../../assets/products/product1-2.jpg";
import prod3 from "../../assets/products/product1-3.jpg";
import prod4 from "../../assets/products/product1-4.jpg";

const ProductSinglePage = () => {
  return (
    <>
      <Row>
        <Col>
          <MainTitle title="Mystic pixel" />
        </Col>
      </Row>
      <Row>
        <Col>
          <StyledDescription>
            Mystic Pixel is a puzzle game where you manipulate pixels to create
            images and patterns. Use your creativity and logic to solve hundreds
            of levels with different themes and challenges. Discover the secrets
            of the mystic pixel group and their mysterious experiments.
          </StyledDescription>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col md={3}>
          <img className="img-fluid" src={prod1} alt="prduct" />
        </Col>
        <Col md={3}>
          <img className="img-fluid" src={prod2} alt="prduct" />
        </Col>
        <Col md={3}>
          <img className="img-fluid" src={prod3} alt="prduct" />
        </Col>
        <Col md={3}>
          <img className="img-fluid" src={prod4} alt="prduct" />
        </Col>
      </Row>
      <Row className="mt-5">
        <Col md={4}>
          <StyledTitle>Features</StyledTitle>
        </Col>
        <Col md={8}>
          <StyledUl>
            <li>
              Pixel art: Enjoy the retro style and colorful graphics of pixel
              art.
            </li>
            <li>
              Puzzle solving: Use your brain and logic to find the right pixel
              combinations and create beautiful images.
            </li>
            <li>
              Variety of themes: Explore different worlds and themes, such as
              animals, nature, fantasy, space, and more.
            </li>
            <li>
              Mystery and adventure: Uncover the story and secrets of the mystic
              pixel group, who are conducting strange experiments with pixels.
            </li>
            <li>
              Achievements and rewards: Earn stars, coins, and gems as you
              complete levels and unlock new content.
            </li>
          </StyledUl>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col md={4}>
          <StyledTitle>The Success Story</StyledTitle>
        </Col>
        <Col md={8}>
          <Row>
            <Col md={4} className="mb-5">
              <h3 className="mb-4">Inputs</h3>
              <StyledUl>
                <li>Time: 12 months of development</li>
                <li>Finances: $100,000 budget</li>
                <li>
                  Resources: 5 developers, 2 designers, 1 tester, 1 project
                  manager
                </li>
                <li>Tools: Unity, Photoshop, Visual Studio, etc.</li>
              </StyledUl>
            </Col>
            <Col md={4} className="mb-5">
              <h3>Activities</h3>
              Designing pixel art graphics and animations Developing puzzle
              logic and mechanics Testing and debugging the game Deploying the
              game on various platforms Marketing and promoting the game
            </Col>
            <Col md={4} className="mb-5">
              <h3>Outputs</h3>A puzzle game with pixel art graphics and
              animations Hundreds of levels with different themes and challenges
              A story and secrets of the mystic pixel group Achievements and
              rewards for completing levels and unlocking content A website and
              social media accounts for the game
            </Col>
            <Col md={4} className="mb-5">
              <h3>Outcomes</h3>
              The game has been downloaded by over 10,000 users The game has
              received positive reviews and ratings from users and critics The
              game has increased the awareness and appreciation of pixel art and
              puzzles The game has inspired other developers and artists to
              create similar games The game has generated revenue and profit for
              the project team
            </Col>
            <Col md={4} className="mb-5">
              <h3>Impact</h3>
              The game has contributed to the advancement and innovation of the
              gaming industry The game has enriched the cultural and artistic
              diversity of the gaming community The game has stimulated the
              creativity and logic of the users The game has entertained and
              educated the users The game has created a positive social and
              environmental impact by donating a portion of the revenue to
              charity and using renewable energy sources
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default ProductSinglePage;
