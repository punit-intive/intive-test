import PageContext from "@/contexts/PageContext";
import { useContext } from "react";

import config from "@/config";
import Constants from "@/constants";
import isExternalLink from "../helpers/isExternalLink";

const useLink = to => {
  const { language } = useContext(PageContext);
  const { defaultLanguage } = config;

  const hasLinkLangPrefix = url => Constants.LANGUAGES.ALL.some(lang => url.startsWith(`/${lang}/`));

  const prepareLink = () => {
    let copyTo = to;

    if (!to) {
      return null;
    }

    if (!isExternalLink(copyTo)) {
      if (copyTo?.includes(".com")) {
        const sliceIndex = copyTo.indexOf(".com") + 4;
        const url = copyTo.slice(sliceIndex, copyTo.length);

        copyTo = url;
      }

      copyTo = copyTo?.startsWith("/") ? copyTo : `/${copyTo}`;

      if (defaultLanguage !== language && !hasLinkLangPrefix(copyTo)) {
        copyTo = `/${language}${copyTo}`;
      }
    }

    return copyTo;
  };

  return prepareLink();
};

export default useLink;
