/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import "./SearchResults.scss";

import transformResultsPopular from "@/helpers/transformResultsPopular";
import __ from "@/helpers/translate";

import Button from "../../../../Forms/Button/Button";
import Link from "../../../../Link";
import getSearchResultsTitle from "../helpers/getSearchResultsTitle";

const SearchResults = ({
  language,
  query,
  results,
  resultsPopular,
  title,
  popularTitle,
  resultsQty,
  seeMoreLabel,
  seeMoreUrl,
  resultsRef
}) => {
  const hasResults = query && results && results.length;
  const showSeeMore = hasResults && results.length > resultsQty;

  const titleFinal = getSearchResultsTitle(hasResults, query, title, popularTitle, language);
  const popularFinal = transformResultsPopular(resultsPopular);
  const resultsFinal = hasResults ? results : popularFinal;

  if (!hasResults && !popularFinal && !query) {
    return null;
  }

  return (
    <div className='app-search-results'>
      <h4>{titleFinal}</h4>

      <div className='app-search-results__wrap scroll-intive' ref={resultsRef} tabIndex={0}>
        {hasResults || !query ? (
          <>
            {resultsFinal.slice(0, resultsQty).map(({ id, title: resultTitle, path }) => (
              <div key={id} className='app-search-results__result' tabIndex={-1}>
                <Link to={path}>{resultTitle}</Link>
              </div>
            ))}

            {showSeeMore && (
              <div className='app-search-results__see-more' tabIndex={-1}>
                <Button variant='text' url={seeMoreUrl}>
                  {seeMoreLabel}
                </Button>
              </div>
            )}
          </>
        ) : (
          <div className='app-search-results__no-results'>{__("search.noresults", language)}</div>
        )}
      </div>
    </div>
  );
};


export default SearchResults;
