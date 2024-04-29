/* eslint-disable indent */
"use client"
import styled from "styled-components";

import { breakpoints } from "@/styles/breakpoints.styled";

const StyledButton = styled.button`
  display: inline-flex;
  min-width: 7.5rem;
  justify-content: center;
  align-items: center;
  border-radius: 128px;
  padding: 0.75rem 2rem;
  ${({ hasIcon }) => hasIcon && `padding: 0.75rem 1.5rem 0.75rem 2rem;`}
  ${({ hasIcon, displayIconLeft }) =>
    hasIcon &&
    displayIconLeft &&
    `
    padding: 0.75rem 2rem 0.75rem 1.5rem;
    .icon {
      margin-right: 0.5rem;
    }
  `}
  ${({ hasChildren }) => !hasChildren && `padding: 0.75rem; min-width: 0rem;`}
  font-family: "MaisonNeue";
  font-size: 1rem;
  color: #ffffff;
  background-color: #007ac9;
  white-space: normal;
  word-break: break-word;
  border-width: 0;
  cursor: pointer;

  .icon:not(:first-child) {
    margin-left: 0.5rem;
  }

  .icon {
    font-size: 0.9rem;
  }

  span.icon {
    font-size: 1.25rem;
    line-height: unset;
  }

  &:hover {
    background-color: #0065a6;
  }

  &:disabled {
    background-color: #bababa;
    cursor: not-allowed;
  }

  &:focus {
    box-shadow: inset 0px 0px 0px 0.25rem #003050;
  }

  ${props =>
    props.variant === "secondary" &&
    ` && {
      background-color: transparent;
      box-shadow:inset 0px 0px 0px 2px #007AC9;
      color: #007AC9;

      &:hover {
        box-shadow:inset 0px 0px 0px 3px #007AC9;
      }

      &:focus {
        box-shadow:inset 0px 0px 0px 0.25rem #007AC9;
      }
    }
  `}

  ${props =>
    props.variant === "text" &&
    ` && {
      min-width: unset;
      padding: unset;
      background-color: transparent;
      color: #007AC9;
      font-weight: 700;

      span:not(.icon):hover {
        text-decoration: underline;
        text-underline-offset: 0.2rem;
      }

      &:focus {
        border: 0.25rem solid #007AC9;
      }
    }
  `}

  ${props =>
    props.variant === "text" &&
    props.disabled &&
    ` && {
      color: #BDBDBD;
      pointer-events: none;

      &:hover {
        text-decoration: none;
      }
    }
  `}

  ${props =>
    props.variant === "pill-secondary" &&
    ` && {
      min-width: 3rem;
      height: 2.25rem;
      padding: 0.5rem 0.65rem;
      font-size: 0.875rem;
      font-weight: 300;
      text-transform: none;
      background-color: transparent;
      box-shadow:inset 0px 0px 0px 1px #007AC9;
      color: #007AC9;

      @media ${breakpoints.tabletM} {
        padding: 0.25rem 0.65rem;
        height: 1.7rem;
      }

      &:hover {
        box-shadow:inset 0px 0px 0px 2px #007AC9;
      }

      &:focus {
        box-shadow:inset 0px 0px 0px 0.25rem #007AC9;
      }
    }
  `}

${props =>
    props.variant === "pill-primary" &&
    ` && {
      min-width: 3rem;
      height: 2.25rem;
      padding: 0.5rem 0.65rem;
      font-size: 0.875rem;
      font-weight: 300;
      text-transform: none;
      color: #ffffff;
      background-color: #007ac9;

      @media ${breakpoints.tabletM} {
        padding: 0.25rem 0.65rem;
        height: 1.7rem;
      }

      &:hover {
        background-color: #0065a6;
      }

      &:focus {
        box-shadow: inset 0px 0px 0px 0.25rem #003050;
      }
    }
  `}

  ${({ customButtonStyle }) => customButtonStyle?.backgroundColor && `background-color: ${customButtonStyle.backgroundColor};`}
  ${({ customButtonStyle }) => customButtonStyle?.fontColor && `color: ${customButtonStyle.fontColor};`}
  ${({ customButtonStyle }) =>
    customButtonStyle?.borderSize &&
    `box-shadow:inset 0px 0px 0px ${customButtonStyle?.borderSize}px ${customButtonStyle.borderColor || "#ffffff"};`}

  &:hover {
    ${({ customButtonStyle }) => customButtonStyle?.hoverBackgroundColor && `background-color: ${customButtonStyle.hoverBackgroundColor};`}
    ${({ customButtonStyle }) => customButtonStyle?.hoverFontColor && `color: ${customButtonStyle.hoverFontColor};`}
    ${({ customButtonStyle }) =>
      customButtonStyle?.hoverBorderSize &&
      `box-shadow:inset 0px 0px 0px ${customButtonStyle?.hoverBorderSize}px ${customButtonStyle.hoverBorderColor || "#ffffff"};`}
  }
`;

export default StyledButton;
