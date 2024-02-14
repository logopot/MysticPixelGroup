import React from "react";
import {
  StyledIconWrapper,
  StyledLabelWrapper,
  StyledServiceCard,
} from "./ServiceCard.styled";
import Label from "../../Label/Label";

const ServiceCard = ({ icon, titleNum, title, url }) => {
  return (
    <StyledServiceCard href={url}>
      <StyledIconWrapper>
        <img className="img-fluid" src={icon} alt={title} />
      </StyledIconWrapper>
      <StyledLabelWrapper className="title-container">
        <Label tag="h2" text={titleNum} />
        <Label tag="h2" text={title} />
      </StyledLabelWrapper>
    </StyledServiceCard>
  );
};

export default ServiceCard;
