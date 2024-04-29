"use client";
import "./AppLinks.scss";

import { guuid } from "@/helpers/common";
import makeLink from "@/helpers/makeLink";
import useClickOutside from "@/hooks/useClickOutside";
import Constants from "@/constants";
import { Fragment, useEffect, useState } from "react";

import Link from "next/link";
import Drawer from "../Drawer";
import cx from 'classnames';
const AppLinks = ({ slug: currentSlug, language, isWhiteMenu, isClosed, onClickParent, className,menuElements }) => {
  const [menuToShow, setMenuToShow] = useState(null);

  const isDefaultLang = language === Constants.LANGUAGES.DEFAULT;

  const handleOnClickParent = id => {
    setMenuToShow(id);

    onClickParent(id);
  };

  useClickOutside(null, ".app-header", () => setMenuToShow(null), "mouseover");

  useEffect(() => {
    if (isClosed && menuToShow) {
      setMenuToShow(null);
    }
  }, [isClosed]);

  return (
    <div className={cx("app-links", className)} role='menubar'>
      {menuElements.map(({ id, name, url, elements:{items:elements} }) => {
        if (!url) {
          return null;
        }

        const slugFinal = isDefaultLang ? `/${url.slug}` : makeLink(url.slug, language);

        const isSubMenuLocation = elements?.some(elemSubMenu => {
          const elemSubMenuSlug = isDefaultLang ? `/${elemSubMenu.url.slug}` : makeLink(elemSubMenu.url.slug, language);

          return elemSubMenuSlug === currentSlug;
        });

        return (
          <Fragment key={id}>
            <Link
              key={url.slug}
              to={url.slug}
              href={url.slug}
              className={cx(
                "app-links__link",
                `nav-link-desktop`,
                {
                  "app-links__link--white": isWhiteMenu
                },
                { "app-links__link--is-active": currentSlug === slugFinal || isSubMenuLocation }
              )}
              activeClassName='app-links__link--is-active'
              data-test={`navbar-item-${url.slug}`}
              role='menuitem'
              onMouseOver={() => handleOnClickParent(id)}
              onClick={() => handleOnClickParent(id)}
            >
              {name}
            </Link>

            {elements && menuToShow === id && (
              <Drawer withPageContent>
                {elements.map(({ id: subElemId, name: subLinkName, url: { slug: subLinkUrl } }) => {
                  const subElemIdExtra = guuid();

                  return (
                    <Link
                      key={`${subElemId}-${subElemIdExtra}`}
                      to={subLinkUrl}
                      className={cx("drawer__item", "nav-link-desktop")}
                      activeClassName='app-links__link--is-active'
                      role='menuitem'
                    >
                      <span>{subLinkName}</span>
                    </Link>
                  );
                })}
              </Drawer>
            )}
          </Fragment>
        );
      })}
    </div>
  );
};


export default AppLinks;
