import "./LangSelector.scss";

import PageContext from "@/contexts/PageContext";
import getLangSlug from "@/helpers/getLangSlug";
import Link from "next/link"
import Constants from "@/constants";
import { useContext } from "react";

const LangSelector = ({ className }) => {
  const { language, slug } = useContext(PageContext);

  return (
    <div className={cx("lang-selector", className)} role='menubar'>
      {Constants.LANGUAGES.ALL.map(lang => {
        const slugPrepared = getLangSlug(slug, language, lang);
        const classNameForLink = cx("lang-selector__link", "body-2", { "lang-selector__link--is-active": language === lang });

        return (
          <Link href={slugPrepared} to={slugPrepared} className={classNameForLink} key={`header-language-link-${lang}`}>
            {lang}
          </Link>
        );
      })}
    </div>
  );
};



export default LangSelector;
