import { defaultLanguage } from "@/config";

const getLangSlug = (slug, currentAppLang, language) => {
  const isCurrentDefaultLang = currentAppLang === defaultLanguage;
  const slugRaw = isCurrentDefaultLang ? slug : slug.substring(3, slug.length);

  return `/${language !== defaultLanguage ? language : ""}${slugRaw}`.replace("//", "/");
};

export default getLangSlug;
