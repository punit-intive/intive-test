/* eslint-disable indent */
"use client";
import Constants from "@/constants";
import { breakpoints, spacings } from "@/styles/breakpoints.styled";
import styled from "styled-components";

import getLinearGradient from "./helpers/getLinearGradient";

const StyledGCLayerMain = styled.div`
  position: relative;

  ${props => props?.customStyle?.backgroundColor1 != null && `background-color: ${props.customStyle.backgroundColor1};`}
  ${props => props?.customStyle?.fontColor != null && `color: ${props.customStyle.fontColor};`}

  ${props => props?.customStyle?.marginTop != null && `margin-top: calc(${props.customStyle.marginTop} * ${spacings.mobile});`}
  ${props => props?.customStyle?.marginBottom != null && `margin-bottom: calc(${props.customStyle.marginBottom} * ${spacings.mobile});`}
  ${props => props?.customStyle?.paddingTop != null && `padding-top: calc(${props.customStyle.paddingTop} * ${spacings.mobile});`}
  ${props => props?.customStyle?.paddingBottom != null && `padding-bottom: calc(${props.customStyle.paddingBottom} * ${spacings.mobile});`}

  @media ${breakpoints.tabletM} {
    ${props => props?.customStyle?.marginTop != null && `margin-top: calc(${props.customStyle.marginTop} * ${spacings.tabletM});`}
    ${props => props?.customStyle?.marginBottom != null && `margin-bottom: calc(${props.customStyle.marginBottom} * ${spacings.tabletM});`}
    ${props => props?.customStyle?.paddingTop != null && `padding-top: calc(${props.customStyle.paddingTop} * ${spacings.tabletM});`}
    ${props =>
      props?.customStyle?.paddingBottom != null && `padding-bottom: calc(${props.customStyle.paddingBottom} * ${spacings.tabletM});`}
  }

  @media ${breakpoints.tabletL} {
    ${props => props?.customStyle?.marginTop != null && `margin-top: ${props.customStyle.marginTop}px;`}
    ${props => props?.customStyle?.marginBottom != null && `margin-bottom: ${props.customStyle.marginBottom}px;`}
    ${props => props?.customStyle?.paddingTop != null && `padding-top: ${props.customStyle.paddingTop}px;`}
    ${props => props?.customStyle?.paddingBottom != null && `padding-bottom: ${props.customStyle.paddingBottom}px;`}
  }

  .page-content {
    position: relative;
    z-index: 10;
    ${props => props?.customStyle?.marginTop != null && `margin-top: 0;`}
    ${props => props?.customStyle?.marginBottom != null && `margin-bottom: 0;`}
    ${props => props?.customStyle?.paddingTop != null && `padding-top: 0;`}
    ${props => props?.customStyle?.paddingBottom != null && `padding-bottom: 0;`}
  }

  .chapter__title,
  .gc-title-and-desc > h2,
  .gc-title-and-desc > h1 {
    ${props => props?.customStyle?.titleColor != null && `color: ${props.customStyle.titleColor};`}
    ${props =>
      props?.customStyle?.titleAlign != null &&
      `align-self: ${Constants.TEXT_ALIGN_TO_FLEX[props.customStyle.titleAlign.toUpperCase()]};
      text-align: ${props.customStyle.titleAlign};`}
  }

  .chapter__title::after,
  .gc-title-and-desc > h2::after,
  .gc-title-and-desc > h1::after {
    ${props =>
      props?.customStyle?.useTitleUnderline &&
      `
      ${getLinearGradient(props?.customStyle?.underlineColors)};
      content: "";
      position: absolute;
      bottom: 5px;
      left: -1.5%;
      height: 8px;
      width: 103%;
      z-index: -1;

      @media ${breakpoints.tabletM} {
        height: 12px;
      }
    `};
  }

  .chapter__sub-heading,
  .gc-title-and-desc > .gc-title-and-desc__title {
    ${props => props?.customStyle?.titleColor != null && `color: ${props.customStyle.titleColor};`}
    ${props =>
      props?.customStyle?.titleAlign != null &&
      `align-self: ${Constants.TEXT_ALIGN_TO_FLEX[props.customStyle.titleAlign.toUpperCase()]};
      text-align: ${props.customStyle.titleAlign};`}
  }

  .chapter__sub-heading,
  .gc-title-and-desc > .gc-title-and-desc__description {
    ${props => props?.customStyle?.descriptionColor != null && `color: ${props.customStyle.descriptionColor};`}
    ${props =>
      props?.customStyle?.descriptionAlign != null &&
      `align-self: ${Constants.TEXT_ALIGN_TO_FLEX[props.customStyle.descriptionAlign.toUpperCase()]};
      text-align: ${props.customStyle.descriptionAlign};`}
  }

  ${props =>
    props?.customStyle?.descriptionColor != null &&
    `.cf-text__blocks-hyperlink {
        color: ${props.customStyle.descriptionColor} !important;
      }
      
     .cf-text__blocks-hyperlink:hover {
        text-decoration: underline;
     }`}
`;

export default StyledGCLayerMain;
