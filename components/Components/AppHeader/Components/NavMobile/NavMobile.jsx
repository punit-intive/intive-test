"use client";
import "./NavMobile.scss";

import { useState } from "react";

import LangSelector from "../../../LangSelector";
import AppButton from "../AppButton";
import AppLinksMobile from "../AppLinksMobile";
import AppNav from "../AppNav";
import AppNavButtons from "../AppNavButtons";
import AppSearch from "../AppSearch";
import Drawer from "../Drawer";

const NavMobile = ({ slug, language, isWhiteMenu }) => {
  const [menuToShow, setMenuToShow] = useState(null);

  const makeHtmlClipped = () => {
    const htmlEl = document.querySelector("html");

    htmlEl.classList.toggle("is-clipped");
  };

  const handleMenuClick = () => {
    makeHtmlClipped();

    setMenuToShow(menuToShow !== "menu" ? "menu" : null);
  };

  const handleSearchClick = () => setMenuToShow(menuToShow !== "search" ? "search" : null);

  return (
    <AppNav className='nav-mobile' isWhiteMenu={isWhiteMenu}>
      <AppNavButtons
        isWhiteMenu={isWhiteMenu}
        searchIcon={<span className='icon material-symbols-outlined'>{menuToShow !== "search" ? "search" : "close"}</span>}
        onClickSearch={handleSearchClick}
      >
        <AppButton
          isWhiteMenu={isWhiteMenu}
          icon={<span className='icon material-symbols-outlined'>{menuToShow !== "menu" ? "menu" : "close"}</span>}
          onClick={handleMenuClick}
        />
      </AppNavButtons>

      {menuToShow === "menu" && (
        <Drawer className='mobile-menu'>
          <AppLinksMobile slug={slug} language={language} className='mobile-menu__menu' />

          <LangSelector className='mobile-menu__langs' />
        </Drawer>
      )}

      {menuToShow === "search" && <AppSearch language={language} />}
    </AppNav>
  );
};



export default NavMobile;
