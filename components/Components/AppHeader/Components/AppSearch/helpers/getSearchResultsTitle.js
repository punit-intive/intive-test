import __ from "@/helpers/translate";

const getSearchResultsTitle = (hasResults, query, resultsTitle, resultsPopularTitle, language) => {
  if (!hasResults && query) {
    return __("search.title.noresults", language);
  }

  return !query ? resultsPopularTitle : resultsTitle;
};

export default getSearchResultsTitle;
