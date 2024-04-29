"use client";
import Form from "@/components/Components/Forms/Form";
import Select, { ClassicIndicator } from "@/components/Components/Forms/Select";
import getLangSlug from "@/helpers/getLangSlug";
import useClickOutside from "@/hooks/useClickOutside";
import Constants from "@/constants";
import { useState } from "react";

import AppLinks from "../AppLinks";
import AppNav from "../AppNav";
import AppNavButtons from "../AppNavButtons";
import AppSearch from "../AppSearch";

const NavDesktop = ({ slug, language, isWhiteMenu ,menus }) => {
  const [showSearch, setShowSearch] = useState(false);

  const dropOptions = Constants.LANGUAGES.ALL.map(lang => {
    const slugPrepared = getLangSlug(slug, language, lang);

    return { label: lang?.toUpperCase(), value: slugPrepared };
  });

  const dropValue = dropOptions.find(opt => opt.label.toLowerCase() === language);

  const selectCustomComponents = {
    DropdownIndicator: ClassicIndicator,
    IndicatorSeparator: () => null
  };

  const handleChangeLang = context => navigate(context.value);

  const handleClickSearch = () => {
    setShowSearch(!showSearch);

    if (showSearch) {
      sessionStorage.removeItem(Constants.STORAGE.KEYS.SEARCH);
    }
  };

  useClickOutside(null, ".app-header", () => setShowSearch(false), "mouseover");

  return (
    <AppNav className='nav-desktop' isWhiteMenu={isWhiteMenu}>
      <AppLinks
        slug={slug}
        menuElements={menus}
        language={language}
        isWhiteMenu={isWhiteMenu}
        isClosed={showSearch}
        onClickParent={() => setShowSearch(false)}
        className='nav-desktop__menu'
      />

      <AppNavButtons
        isWhiteMenu={isWhiteMenu}
        searchIcon={<span className='icon material-symbols-outlined'>{showSearch ? "close" : "search"}</span>}
        onClickSearch={handleClickSearch}
      >
        <Form onSubmit={() => {}} onError={() => {}}>
          <Select
            placeholder={dropValue.label}
            name='languages'
            value={dropValue}
            options={dropOptions}
            customComponents={selectCustomComponents}
            isSearchable={false}
            className='dropdown-tiny'
            classNamePrefix='dropdown-tiny'
            onChange={handleChangeLang}
          />
        </Form>
      </AppNavButtons>

      {showSearch && <AppSearch language={language} />}
    </AppNav>
  );
};



export default NavDesktop;
