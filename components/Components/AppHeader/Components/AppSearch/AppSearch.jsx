"use client";
/* eslint-disable no-unused-vars */
import "./AppSearch.scss";

import Button from "@/components/Components/Forms/Button";
import Form from "@/components/Components/Forms/Form";
import Input from "@/components/Components/Forms/Input";
import __ from "@/helpers/translate";
import useLink from "@/hooks/useLink";
import Constants from "@/constants";
import { useEffect, useRef, useState } from "react";
import { useFlexSearch } from "react-use-flexsearch";

import Drawer from "../Drawer";
import SearchResults from "./Components/SearchResults";
import handleKeyDownOnResults from "./helpers/handleKeyDownOnResults";

const AppSearch = ({ language }) => {
  const [query, setQuery] = useState(sessionStorage.getItem(Constants.STORAGE.KEYS.SEARCH));

  const { index, store } = useSearchIndex();
  const results = useFlexSearch(query, index, store);

  const searchData = useSearchController(language);
  const searchPageUrlWithQuery = useLink(
    query ? `${searchData.slug}?${new URLSearchParams(`${Constants.SEARCH_PARAMS.QUERY}=${query}`)}` : searchData.slug
  );

  const searchRef = useRef();
  const searchResultsRef = useRef();

  const formOptions = {
    modeSubmit: "onChange",
    defaultValues: { search: sessionStorage.getItem(Constants.STORAGE.KEYS.SEARCH) }
  };

  const handleOnSubmit = res => {
    const valueFinal = res?.search && res?.search.length > 2 ? res.search : null;

    setQuery(valueFinal);

    if (valueFinal) {
      sessionStorage.setItem(Constants.STORAGE.KEYS.SEARCH, valueFinal);
    } else {
      sessionStorage.removeItem(Constants.STORAGE.KEYS.SEARCH);
    }
  };

  useEffect(() => {
    const searchRefHandle = searchRef.current;

    searchRefHandle.addEventListener("keydown", event => handleKeyDownOnResults(event, searchResultsRef));

    return () => searchRefHandle.removeEventListener("keydown", event => handleKeyDownOnResults(event, searchResultsRef));
  }, []);

  return (
    <Drawer className='app-search' withPageContent ref={searchRef}>
      <Form onSubmit={handleOnSubmit} onError={() => {}} showNotification={false} focusOn='search' options={formOptions}>
        <Input type='text' name='search' placeholder={searchData.searchPlaceholder} language={language} hideLabel autocomplete='off' />

        <Button iconMaterial='search' url={searchPageUrlWithQuery} />

        <SearchResults
          query={query}
          results={results}
          resultsPopular={searchData.searchPopular}
          title={searchData.searchResultsTitle}
          popularTitle={searchData.searchResultsPopularTitle}
          resultsQty={searchData.searchResultsQuantity}
          seeMoreLabel={searchData.searchSeeMoreLabel}
          seeMoreUrl={searchPageUrlWithQuery}
          language={language}
          resultsRef={searchResultsRef}
        />
      </Form>
    </Drawer>
  );
};



export default AppSearch;
