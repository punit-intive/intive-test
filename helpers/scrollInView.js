import { detect } from "detect-browser";

import { checkIfMobileScreen, checkIfTabletLargeScreen, checkIfTabletMediumScreen } from "./deviceScreenDetectors";

const floatingMenuOffsets = {
  desktop: 130,
  tablet: 116,
  mobile: 80
};

const getMenuOffset = () => {
  if (checkIfMobileScreen()) {
    return floatingMenuOffsets.mobile;
  }

  if (checkIfTabletLargeScreen() || checkIfTabletMediumScreen()) {
    return floatingMenuOffsets.tablet;
  }

  return floatingMenuOffsets.desktop;
};

const getScrollingBehaviour = () => {
  const browser = detect();

  /*
    Firefox has issue with supporting behavior: smooth,
    Sometimes it causes FF to ignore completely the `scrollTo` call.
    This hack ensures that `scrollTo` will work on FF, although without easing.
   */
  if (!browser || browser.name === "firefox") {
    return "auto";
  }

  return "smooth";
};

// Scroll in view taking into consideration floating menu
const scrollInView = item => {
  if (item !== null && item !== undefined) {
    const viewportPosition = window.scrollY;
    const itemPosition = viewportPosition + item.getBoundingClientRect().top;
    const direction = itemPosition > viewportPosition ? "down" : "up";

    const offset = getMenuOffset();

    const floatingMenuOffset = direction === "down" ? 0 : offset;

    if (itemPosition !== viewportPosition) {
      window.scrollTo({
        top: itemPosition - floatingMenuOffset,
        behavior: getScrollingBehaviour()
      });
    }
  }
};

export default scrollInView;
