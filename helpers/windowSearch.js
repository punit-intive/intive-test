/* eslint-disable no-plusplus */
// https://stackoverflow.com/questions/5448545/how-to-retrieve-get-parameters-from-javascript/5448635#5448635
// solution working with IE8
const getSearchParams = () => {
  const parameterString = window.location.search.substr(1);
  if (parameterString === null || parameterString === "") {
    return null;
  }

  const params = {};
  const paramsArray = parameterString.split("&");
  for (let i = 0; i < paramsArray.length; i += 1) {
    const tempArray = paramsArray[i].split("=");
    const [key, value] = tempArray;
    params[key] = value;
  }
  return params;
};

// eslint-disable-next-line
export { getSearchParams };
