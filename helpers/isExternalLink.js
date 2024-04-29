import Constants from "../constants";

const isExternalLink = link => {
  const isInternalRoute = !Object.values(Constants.URLS_PREFIXS).some(prefix => link.startsWith(prefix));

  if (isInternalRoute) {
    return false;
  }

  const baseUrls = Object.values(Constants.URLS);

  return !baseUrls.some(url => link.startsWith(url));
};

export default isExternalLink;
