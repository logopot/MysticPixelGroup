import React from "react";
import { StyledLabel } from "./Label.styled";

const Label = ({ tag, text, className }) => {
  return (
    <StyledLabel as={tag} text={text} className={className}>
      {text}
    </StyledLabel>
  );
};

export default Label;
