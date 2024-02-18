import React from "react";
import {
  StyledIconWrapper,
  StyledLabelWrapper,
  StyledServiceCard,
  StyledLabel,
} from "./ServiceCard.styled";

const ServiceCard = ({ titleNum, title, url, iconName }) => {
  return (
    <StyledServiceCard href={url}>
      <StyledIconWrapper>{iconName}</StyledIconWrapper>
      <StyledLabelWrapper className="title-container">
        <StyledLabel tag="h2" text={titleNum} />
        <StyledLabel tag="h2" text={title} />
      </StyledLabelWrapper>
    </StyledServiceCard>
  );
};

export default ServiceCard;
