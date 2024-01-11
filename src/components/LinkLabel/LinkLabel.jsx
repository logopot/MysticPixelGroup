import React from "react";
import { StyledLinkLabel } from "./LinkLabel.styled";

const LinkLabel = ({ url, label }) => {
  return <StyledLinkLabel href={url}>{label}</StyledLinkLabel>;
};

export default LinkLabel;
