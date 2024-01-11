import React from "react";
import { Col, Row } from "react-bootstrap/esm";
import image from "../../assets/products/product.jpg";
import image2 from "../../assets/products/product2.jpg";
import {
  StyledCathegoryTag,
  StyledDescription,
  StyledTitle,
} from "./ProductCard.styled";
import LinkLabel from "../LinkLabel/LinkLabel";
import Separator from "../Separator/Separator";

const ProductCard = () => {
  return (
    <>
      <Row>
        <Col md={6} className="pe-md-5 pb-4 pb-md-3">
          <img className="img-fluid" src={image} alt="product" />
        </Col>
        <Col className="ps-md-5">
          <StyledCathegoryTag>Puzzle</StyledCathegoryTag>
          <StyledTitle>Mystic pixel</StyledTitle>
          <StyledDescription>
            A puzzle game where you manipulate pixels to create images and
            patterns. Use your creativity and logic to solve hundreds of levels
            with different themes and challenges. Discover the secrets of the
            mystic pixel group and their mysterious experiments.
          </StyledDescription>

          <LinkLabel url="/MysticPixelGroup" label="View case" />
        </Col>
      </Row>

      <Separator />

      <Row className="align-items-end">
        <Col className="pe-md-5  order-2 order-md-1">
          <StyledCathegoryTag>Platform</StyledCathegoryTag>
          <StyledTitle>Pixel Quest</StyledTitle>
          <StyledDescription>
            A retro-style adventure game where you explore a pixelated world
            full of secrets, puzzles, and enemies. Collect power-ups, unlock new
            abilities, and face challenging bosses as you uncover the mystery
            behind the mystic pixel group.
          </StyledDescription>
          <LinkLabel url="/MysticPixelGroup" label="View case" />
        </Col>
        <Col md={6} className="ps-md-5 order-1 order-md-2 pb-4 pb-md-3">
          <img className="img-fluid" src={image2} alt="product" />
        </Col>
      </Row>

      <Separator />
    </>
  );
};

export default ProductCard;
