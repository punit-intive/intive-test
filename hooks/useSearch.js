import { useEffect, useState } from "react";
import { useFlexSearch } from "react-use-flexsearch";

import Constants from "../constants";
import useSearchIndex from "./useSearchIndex";

const useSearch = (query, filters, sortBy) => {
  const [results, setResults] = useState([]);

  const { index, store } = useSearchIndex();
  const resultsRaw = useFlexSearch(query, index, store);

  const sort = (rlts, srtBy) => {
    const sortedResults = [...rlts];
    const isSortingByTitle = srtBy === Constants.SEARCH.SORTING.ALPHA_ASC || srtBy === Constants.SEARCH.SORTING.ALPHA_DESC;

    const sortingByDate = (a, b) => {
      if (srtBy === Constants.SEARCH.SORTING.OLDEST) {
        return a.date.localeCompare(b.date);
      }

      return b.date.localeCompare(a.date);
    };

    const sortingByTitle = (a, b) => {
      if (srtBy === Constants.SEARCH.SORTING.ALPHA_ASC) {
        return a.title.trim().localeCompare(b.title.trim());
      }

      return b.title.trim().localeCompare(a.title.trim());
    };

    sortedResults.sort(isSortingByTitle ? sortingByTitle : sortingByDate);

    return sortedResults;
  };

  const filter = (rlts, flts) => {
    const shouldFilter = flts && (flts[Constants.SEARCH.FILTERS.PAGE_TYPES.KEY] || flts[Constants.SEARCH.FILTERS.DATE.KEY]);
    let filteredResults = [...rlts];

    const filterByPageType = item => item[Constants.SEARCH.FILTERS.PAGE_TYPES.KEY] === flts[Constants.SEARCH.FILTERS.PAGE_TYPES.KEY];

    const filterByDate = item => {
      const dateComp = new Date();
      dateComp.setDate(dateComp.getDate() - Number(flts[Constants.SEARCH.FILTERS.DATE.KEY]));

      return new Date(item[Constants.SEARCH.FILTERS.DATE.KEY]) >= dateComp;
    };

    if (shouldFilter) {
      if (filters[Constants.SEARCH.FILTERS.PAGE_TYPES.KEY]) {
        filteredResults = filteredResults.filter(filterByPageType);
      }

      if (filters[Constants.SEARCH.FILTERS.DATE.KEY]) {
        filteredResults = filteredResults.filter(filterByDate);
      }
    }

    return filteredResults;
  };

  useEffect(() => {
    if (resultsRaw) {
      setResults(sort(filter(resultsRaw, filters), sortBy));
    }
  }, [filters, resultsRaw]);

  useEffect(() => {
    setResults(pendingState => sort(pendingState, sortBy));
  }, [sortBy]);

  return results;
};

export default useSearch;
