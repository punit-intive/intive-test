import { checkIfWindowObjectExists } from "@/helpers/checkIfWindowObjectExists";

const getSearchParam = name => {
  const doesWindowExist = checkIfWindowObjectExists();

  if (!doesWindowExist) {
    return null;
  }

  const params = new URLSearchParams(window.location.search);

  return params.get(name);
};

const setSearchParam = (name, value, append = false, updateHistory = true, clearAllFirst = false) => {
  const doesWindowExist = checkIfWindowObjectExists();

  if (!doesWindowExist) {
    return null;
  }

  const location = clearAllFirst ? `${window.location.origin}${window.location.pathname}` : window.location;
  const url = new URL(location);

  url.searchParams[append ? "append" : "set"](name, value);

  if (updateHistory) {
    window.history.pushState({}, window.document.title, url.href);
  }

  return url;
};

const deleteSearchParam = (name, updateHistory = true) => {
  const doesWindowExist = checkIfWindowObjectExists();

  if (!doesWindowExist) {
    return null;
  }

  const url = new URL(window.location);

  url.searchParams.delete(name);

  if (updateHistory) {
    window.history.pushState({}, window.document.title, url);
  }

  return url;
};

const getEntriesSearchParams = () => {
  const doesWindowExist = checkIfWindowObjectExists();

  if (!doesWindowExist) {
    return null;
  }

  const url = new URL(window.location);

  return url.searchParams.entries();
};

const getSearchParamsAsString = () => {
  const doesWindowExist = checkIfWindowObjectExists();

  if (!doesWindowExist) {
    return null;
  }

  const params = new URLSearchParams(window.location.search);

  return params.toString();
};

const updateLinkWithCurrentSearchParams = link => {
  const hasSearchParams = link.includes("?");
  const clearLink = hasSearchParams ? link.slice(0, link.indexOf("?")) : link;

  const paramsAsString = getSearchParamsAsString();

  return paramsAsString ? `${clearLink}?${paramsAsString}` : clearLink;
};

export {
  deleteSearchParam,
  getEntriesSearchParams,
  getSearchParam,
  getSearchParamsAsString,
  setSearchParam,
  updateLinkWithCurrentSearchParams
};
