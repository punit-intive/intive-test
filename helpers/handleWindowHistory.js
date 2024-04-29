/**
 * handles creating an url for dynamic lists so user can copy/paste the url
 * and get the same list on different browser instace,
 * this will check if needed parameters are there,
 * each state change (except first one from componentDidMount
 * will trigger rebulding of given url.
 *
 * If needed values are set to "all" remove the link entirely, since then
 * user is back in gatbsy static pages
 * @param {boolean} isFirstRun - is only true when there are is no filtering after componenDidMount
 * @param {boolean} isFiltersSetToAll - shows if filterStatus = "all"
 * @param {array} valuesNeeded - an array containing names of values that are used to filter elements (i.e. filterDisciplinesActiveId)
 * @param {array} stateValues - contains values that are used to filter elements (i.e. dynamicPageIndex = 1)
 */
const handleHistory = (isFirstRun, isFiltersSetToAll, valuesNeeded, stateValues) => {
  if (isFirstRun) {
    return null;
  }

  const url = new URL(document.location);

  if (isFiltersSetToAll) {
    valuesNeeded.forEach(value => {
      url.searchParams.delete(value);
    });
  } else {
    stateValues.forEach((value, index) => {
      url.searchParams.set(valuesNeeded[index], value);
    });
  }
  return window.history.replaceState(null, document.title, url);
};

/**
 * @param {array} valuesNeeded - an array containing names of values that are used to filter elements (i.e. filterDisciplinesActiveId)
 * @param {string} filterStatus - represents current filter status (i.e. "all")
 * @param {object} searchParams - contains parameters taken from window that are avaiable after filtering
 */
const getHistoryValues = (valuesNeeded, filterStatus, searchParams) => {
  const newStateValues = {};

  valuesNeeded.forEach(value => {
    if (searchParams[value] && searchParams[value] !== filterStatus.all) {
      newStateValues[value] = decodeURIComponent(searchParams[value].replace(/\+/g, " "));
    }
  });

  // since our index is an INT and start from 1, do some checking
  newStateValues.dynamicPageIndex = parseInt(newStateValues.dynamicPageIndex);
  if (newStateValues.dynamicPageIndex === 0) {
    newStateValues.dynamicPageIndex = 1;
  }

  return newStateValues;
};

export { getHistoryValues, handleHistory };
