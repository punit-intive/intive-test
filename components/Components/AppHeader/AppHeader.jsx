"use client";
import "./AppHeader.scss";

import PageContext from "@/contexts/PageContext";
import useDetectMobile from "@/hooks/useDetectMobile";

import PageContent from "../PageContent";
import NavDesktop from "./Components/NavDesktop";
import NavMobile from "./Components/NavMobile";
import { useContext } from "react";

const AppHeader = ({ isWhiteMenu,menus }) => {
  const contextData = useContext(PageContext);
  const slug = contextData?.slug ? contextData.slug : "";
  const language = contextData?.language ? contextData.language : "en";
  const { isMobile } = useDetectMobile(false);

  return (
    <div className='app-header'>
      <PageContent>
        {!isMobile ? (
          <NavDesktop slug={slug} menus={menus} language={language} isWhiteMenu={isWhiteMenu} />
        ) : (
          <NavMobile slug={slug} menus={menus} language={language} isWhiteMenu={isWhiteMenu} />
        )}
      </PageContent>
    </div>
  );
};



export default AppHeader;
