import { guuid } from "@/helpers/common";

import getComponentsTypes from "./helpers/getComponentsTypes";

const ComponentsProvider = ({ components, language }) => {
  const componentsTypes = getComponentsTypes();
  const renderProperComponent = component => {
    const {
      __typename,
      elements,
      customStyle
    } = component;
    const Component =   componentsTypes[__typename];

    return <Component {...component} language={language} key={guuid()} />;
  };

  return components.map(renderProperComponent);
};

export default ComponentsProvider;
