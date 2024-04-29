const sizes = {
  mobile: "767px",
  tabletM: "768px",
  tabletL: "1024px",
  desktopM: "1216px",
  desktopL: "1440px"
};

const breakpoints = {
  mobile: `(max-width: ${sizes.mobile})`,
  tabletM: `(min-width: ${sizes.tabletM})`,
  tabletL: `(min-width: ${sizes.tabletL})`,
  desktopM: `(min-width: ${sizes.desktopM})`,
  desktopL: `(min-width: ${sizes.desktopL})`
};

const spacings = {
  mobile: "0.45px",
  tabletM: "0.7px"
};

export { breakpoints, spacings };
