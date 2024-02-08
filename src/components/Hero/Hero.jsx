import React from "react";

import { StyledHeroInner, StyledSection, StyledTitle } from "./Hero.styled";
import LinkLabel from "../LinkLabel/LinkLabel";

const Hero = () => {
  return (
    <>
      <StyledSection className="hero">
        <StyledHeroInner className="hero-inner">
          <StyledTitle>
            Dare to dream, dare to code, dare to join us.
          </StyledTitle>
          <LinkLabel url="https://logopot.rs/" label="Go ahead!" />
        </StyledHeroInner>
      </StyledSection>
    </>
  );
};

export default Hero;
