import React from "react";
import { StyledFooter } from "./Footer.styled";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <StyledFooter>
      <p className="mb-0 ms-4">
        &copy; {currentYear} MysticPixelGroup. All rights reserved.
      </p>
    </StyledFooter>
  );
};

export default Footer;
