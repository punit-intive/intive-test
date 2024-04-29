import "./AppLinksMobile.scss";

import { guuid } from "@/helpers/common";
import makeLink from "@/helpers/makeLink";
import __ from "@/helpers/translate";
import Constants from "@/constants"; 
import { useEffect, useState } from "react";

import Link from "../../../Link";
import { getModelMenus } from "@/lib/contentful/api";

const AppLinksMobile = ({ slug: currentSlug, language, isWhiteMenu, isClosed, onClickParent, className }) => {
  const { menuElements } = getModelMenus(language);
  const [menuToShow, setMenuToShow] = useState(null);

  const isDefaultLang = language === Constants.LANGUAGES.DEFAULT;

  const handleOnClickParent = id => {
    const finalId = menuToShow !== id && id;

    setMenuToShow(finalId);

    onClickParent(finalId);
  };

  useEffect(() => {
    if (isClosed && menuToShow) {
      setMenuToShow(null);
    }
  }, [isClosed]);

  return (
    <div className={cx("app-links-mobile", className)} role='menubar'>
      {menuElements.map(({ id, name, url: { slug }, elements }) => {
        const elementsFinal = elements ? [{ name: `${__("all", language)} ${name}`, url: { slug } }, ...elements] : elements;
        const showSubmenu = elements && menuToShow === id;
        const slugFinal = isDefaultLang ? `/${slug}` : makeLink(slug, language);

        const isSubMenuLocation = elements?.some(elemSubMenu => {
          const elemSubMenuSlug = isDefaultLang ? `/${elemSubMenu.url.slug}` : makeLink(elemSubMenu.url.slug, language);

          return elemSubMenuSlug === currentSlug;
        });

        return (
          <div className='app-links-mobile__menu-item' key={id}>
            <div
              className='app-links-mobile__header'
              onClick={() => handleOnClickParent(id)}
              onKeyDown={() => handleOnClickParent(id)}
              role='menuitem'
              tabIndex={0}
            >
              <Link
                key={slug}
                to={!elements && slug}
                className={cx(
                  "app-links-mobile__link",
                  "nav-link-mobile",
                  {
                    "app-links-mobile__link--white": isWhiteMenu
                  },
                  { "app-links-mobile__link--is-active": currentSlug === slugFinal || isSubMenuLocation }
                )}
                activeClassName='app-links-mobile__link--is-active'
              >
                {name}
              </Link>

              {elements && <span className='material-symbols-outlined'>{showSubmenu ? "expand_less" : "expand_more"}</span>}
            </div>

            {showSubmenu && (
              <div className='app-links-mobile__sub-menu'>
                {elementsFinal.map(({ id: subElemId, name: subLinkName, url: { slug: subLinkUrl } }) => {
                  const finalSubLinkUrl = isDefaultLang ? `/${subLinkUrl}` : makeLink(subLinkUrl, language);
                  const subElemIdExtra = guuid();

                  return (
                    <Link
                      key={`${subElemId}-${subElemIdExtra}`}
                      to={subLinkUrl}
                      role='menuitem'
                      className={cx({ "app-links__link--is-active": currentSlug === finalSubLinkUrl })}
                    >
                      <span>{subLinkName}</span>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};



export default AppLinksMobile;
