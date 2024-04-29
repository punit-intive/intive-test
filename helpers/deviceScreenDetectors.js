const windowObjectExists = () => typeof window !== `undefined`;

const checkIfMobileScreen = () => {
  const maxMobileWidth = "767px";

  if (windowObjectExists()) {
    return window.matchMedia(`only screen and (max-width: ${maxMobileWidth})`).matches;
  }

  return false;
};

const checkIfTabletMediumScreen = () => {
  const maxTabletMediumWidth = "1023px";

  if (windowObjectExists()) {
    return window.matchMedia(`only screen and (max-width: ${maxTabletMediumWidth})`).matches;
  }

  return false;
};

const checkIfTabletLargeScreen = () => {
  const maxTabletLargeWidth = "1215px";

  if (windowObjectExists()) {
    return window.matchMedia(`only screen and (max-width: ${maxTabletLargeWidth})`).matches;
  }

  return false;
};

const checkIfDesktopScreen = () => {
  const minDesktopWidth = "1216px";

  if (windowObjectExists()) {
    return window.matchMedia(`only screen and (min-width: ${minDesktopWidth})`).matches;
  }

  return false;
};

const checkIfCustomScreen = width => {
  if (windowObjectExists()) {
    return window.matchMedia(`only screen and (min-width: ${width})`).matches;
  }

  return false;
};

module.exports = {
  checkIfMobileScreen,
  checkIfTabletMediumScreen,
  checkIfTabletLargeScreen,
  checkIfDesktopScreen,
  checkIfCustomScreen
};
