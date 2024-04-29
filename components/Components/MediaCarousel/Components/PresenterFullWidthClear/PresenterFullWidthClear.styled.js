import styled from "styled-components";

const StyledRect = styled.div`
  background-color: ${props => props.bgColor};
  color: ${props => props.fontColor};

  button {
    ${props => props.shouldExtendSpaces && "margin-bottom: 75px;"}
  }
`;

export default StyledRect;
