"use client";
import MediaViewer from "@/components/Components/MediaViewer";
import Constants from "@/constants";

import { StyledBgImage, StyledStripeHor, StyledStripeVer } from "./Background.styled";

const Background = ({ backgroundImage, backgroundImageFit, backgroundStyle, backgroundColor1, backgroundColor2 }) => {
  const getStyle = (base, style) => base[style.toString().toUpperCase()] || base.DEFAULT;

  const background = backgroundStyle ? getStyle(Constants.GENERIC_COMPONENTS.BACKGROUNDS, backgroundStyle) : null;
  const hasBgColors = backgroundColor1 && backgroundColor2;
  const isBgStripeHor = background === Constants.GENERIC_COMPONENTS.BACKGROUNDS["STRIPES-HORIZONTAL"];
  const isBgStripeVer = background === Constants.GENERIC_COMPONENTS.BACKGROUNDS["STRIPES-VERTICAL"];

  if (backgroundImage) {
    return (
      <StyledBgImage className='main-gc-layer__bg-image' backgroundImageFit={backgroundImageFit}>
        <MediaViewer media={backgroundImage} mediaFit={backgroundImageFit} mediaLoading='lazy' />
      </StyledBgImage>
    );
  }

  if (hasBgColors && isBgStripeHor) {
    return <StyledStripeHor backgroundColor2={backgroundColor2} className='main-gc-layer__bg-stripe-horizontal' />;
  }

  if (hasBgColors && isBgStripeVer) {
    return <StyledStripeVer backgroundColor2={backgroundColor2} className='main-gc-layer__bg-stripe-vertical' />;
  }

  return null;
};



export default Background;
