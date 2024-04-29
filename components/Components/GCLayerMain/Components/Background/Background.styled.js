"use client";
import styled from "styled-components";

const StyledStripeHor = styled.div`
  position: absolute;
  width: 100%;
  height: 50%;
  bottom: 0;
  background-color: ${props => props.backgroundColor2};
`;

const StyledStripeVer = styled.div`
  position: absolute;
  width: 60%;
  height: 100%;
  right: 0;
  bottom: 0;
  background-color: ${props => props.backgroundColor2};
`;

const StyledBgImage = styled.div`
  position: absolute;
  display: block;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;
  display: flex;

  & > * {
    width: 100%;
  }
`;

export { StyledBgImage, StyledStripeHor, StyledStripeVer };
