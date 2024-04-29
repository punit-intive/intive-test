import translations from "@/translations/translations.json";
import { isEmptyArray } from "./checkArrays";

/**
 * Prepares translations according to the given translation ID
 *
 * ***IMPORTANT***, if in Localstorage, there is a variable called: "showTranslationsId" and it's set to "1"
 * the id's of given translation wil be shown, this is done for the content creators to have possibility to find
 * given translation in contentful faster
 *
 * @param {string} translationId - id of given translation from contentful
 * @param {string} language - which language is set on page
 * @param {array} translationVariables - if the translations has some kind of variables in it, this will fill the gaps with proper order of translations, numbered by `{0} {1}` etc
 */
const __ = (translationId, language, translationVariables = []) => {
  let finalLanguage;
  if (!language) {
    console.error(`translation problem, language was not provided for ${translationId}- defaulting to 'en'`);
    finalLanguage = "en";
  } else {
    finalLanguage = language;
  }
  if (!translations[translationId]) {
    console.error(`translation problem, missing id: ${translationId}`);
    return translationId;
  }
  if (!translations[translationId][finalLanguage]) {
    console.error(`translation problem, missing language ${finalLanguage} for id: ${translationId}`);
    return translationId;
  }

  let translationText = translations[translationId][finalLanguage];

  if (!isEmptyArray(translationVariables)) {
    for (let i = 0; i < translationVariables.length; i += 1) {
      const regex = new RegExp(`[{]${i}[}]`, "g");

      translationText = translationText.replace(regex, translationVariables[i]);
    }
  }

  if (typeof window !== "undefined") {
    const isShowSet = localStorage.getItem("showTranslationsId");
    if (isShowSet !== null && isShowSet === "1") {
      return translationId;
    }
  }

  return translationText;
};

export default __;
