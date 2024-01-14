import React from "react";
import { Col, Row } from "react-bootstrap/esm";
import image from "../../assets/products/product.jpg";
import image2 from "../../assets/products/product2.jpg";
import image3 from "../../assets/products/product3.jpg";
import {
  StyledCathegoryTag,
  StyledDescription,
  StyledImage,
  StyledTitle,
  StyledTitleLink,
} from "./ProductCard.styled";
import LinkLabel from "../LinkLabel/LinkLabel";
import Separator from "../Separator/Separator";

const ProductCard = () => {
  return (
    <>
      <Row>
        <Col md={6} className="pe-md-5">
          <a href="MysticPixelGroup/MysticPixel">
            <StyledImage className="img-fluid" src={image} alt="product" />
          </a>
        </Col>
        <Col className="ps-md-5 pt-5 pt-md-0">
          <StyledCathegoryTag>Puzzle</StyledCathegoryTag>
          <StyledTitleLink href="MysticPixelGroup/MysticPixel">
            <StyledTitle>Mystic pixel</StyledTitle>
          </StyledTitleLink>
          <StyledDescription>
            A puzzle game where you manipulate pixels to create images and
            patterns. Use your creativity and logic to solve hundreds of levels
            with different themes and challenges. Discover the secrets of the
            mystic pixel group and their mysterious experiments.
          </StyledDescription>

          <LinkLabel url="MysticPixelGroup/MysticPixel" label="Discover more" />
        </Col>
      </Row>

      <Separator variant="minusMargin" />

      <Row className="align-items-end">
        <Col className="pe-md-5 pt-5 pt-md-0 order-2 order-md-1">
          <StyledCathegoryTag>Platform</StyledCathegoryTag>
          <StyledTitleLink href="MysticPixelGroup/MysticPixel">
            <StyledTitle>Pixel Quest</StyledTitle>
          </StyledTitleLink>
          <StyledDescription>
            A retro-style adventure game where you explore a pixelated world
            full of secrets, puzzles, and enemies. Collect power-ups, unlock new
            abilities, and face challenging bosses as you uncover the mystery
            behind the mystic pixel group.
          </StyledDescription>
          <LinkLabel
            url="MysticPixelGroup/MysticPixel"
            label="Explore the details"
          />
        </Col>
        <Col md={6} className="ps-md-5 order-1 order-md-2">
          <a href="MysticPixelGroup/MysticPixel">
            <StyledImage className="img-fluid" src={image2} alt="product" />
          </a>
        </Col>
      </Row>

      <Separator variant="plusMargin" />

      <Row>
        <Col lg={12} xl={7} className="pe-xl-5">
          <a href="MysticPixelGroup/MysticPixel">
            <StyledImage className="img-fluid" src={image3} alt="product" />
          </a>
        </Col>
        <Col lg={12} xl={5} className="pt-5 pt-xl-0">
          <StyledCathegoryTag>Shooter</StyledCathegoryTag>
          <StyledTitleLink href="MysticPixelGroup/MysticPixel">
            <StyledTitle>Pixel Blast: The Final Countdown</StyledTitle>
          </StyledTitleLink>
          <StyledDescription>
            A shooter game where you control a pixelated spaceship that must
            escape from a massive pixel explosion. Shoot your way through the
            enemies, asteroids, and debris, and collect power-ups, upgrades, and
            bonuses. The pixel blast is getting closer every second, so you have
            to hurry and reach the safe zone before it's too late.
          </StyledDescription>
          <LinkLabel url="MysticPixelGroup/MysticPixel" label="Go beyond" />
        </Col>
      </Row>

      <Separator variant="plusMargin" />
    </>
  );
};

export default ProductCard;
