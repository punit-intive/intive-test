import Constants from "../constants";

const setStylesVariablesBasedOnTheme = theme => {
  const htmlDom = document.querySelector(":root");
  const themeKeys = Object.keys(theme);

  themeKeys.forEach(key => {
    if (Object.prototype.hasOwnProperty.call(Constants.THEME_PROP_TO_CSS_PROP, key)) {
      htmlDom.style.setProperty(Constants.THEME_PROP_TO_CSS_PROP[key], theme[key]);
    }
  });
};

const removeThemeStylesVariables = () => {
  const htmlDom = document.querySelector(":root");
  const themeVariables = Object.values(Constants.THEME_PROP_TO_CSS_PROP);

  themeVariables.forEach(themeVar => {
    htmlDom.style.removeProperty(themeVar);
  });

  htmlDom.removeAttribute("style");
};

export { removeThemeStylesVariables, setStylesVariablesBasedOnTheme };
