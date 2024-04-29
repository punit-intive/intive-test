/* eslint-disable indent */
"use client"
import styled from "styled-components";


const StyledLogos = styled.div`
  overflow: hidden;
  position: relative;
  cursor: default;
  user-select: none;
  touch-action: none;

  .brand-carousel-slider__track {
    display: flex;

    ${props => props.timeToChange && `animation: scroll ${props.timeToChange}s linear infinite;`}

    ${props =>
      props.logosLength &&
      `
        width: calc(12rem * ${props.logosLength} * 2);

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-12rem * ${props.logosLength}));
          }
        }
    `}
  }

  .brand-carousel-slider__slide {
    display: inline-flex;
    width: 12rem;
    padding: 0 0.5rem;

    img {
      display: inline-block;
      width: 100%;
      height: 100%;
    }
  }
`;

export default StyledLogos;
