import styled from "styled-components";

export const StyledServiceCard = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 500px;
  background-color: black;
  color: ${(props) => props.theme.textColor};
  border: 2px solid ${(props) => props.theme.accentColor};

  padding: 30px;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    border: 2px solid ${(props) => props.theme.textColor};
    text-decoration: none;
  }
`;

export const StyledIconWrapper = styled.div`
  img {
    width: 80px;
  }
`;
export const StyledLabelWrapper = styled.div`
  h2 {
    font-size: 20px;
    color: ${(props) => props.theme.colorWhite} !important;

    &:first-of-type {
      color: ${(props) => props.theme.accentColor} !important;
      font-weight: 700;
    }
  }
`;
