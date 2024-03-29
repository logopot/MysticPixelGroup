import styled from "styled-components";

export const StyledFooter = styled.div`
  margin-top: 50px;
  display: flex;
  border-top: 0.7px solid ${(props) => props.theme.lineColor};
  height: 90px;
  align-items: center;
  color: ${(props) => props.theme.textColor};
  font-size: 12px;
`;
