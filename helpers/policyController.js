/* eslint-disable camelcase */
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

import __ from "./translate";

const getCheckboxConsentData = (shouldConsentBeSent, language) =>
  shouldConsentBeSent ? __("forms.consent.approve", language) : __("forms.consent.refuse", language);

const getPolicyDocument = controllersData => {
  const { consentPolicy: policy } = controllersData;
  const result = { content: policy };

  return result;
};

const controllerConsent = controllersData => {
  const { consent } = controllersData;
  const result = documentToHtmlString(JSON.parse(consent?.raw ?? null));

  return result;
};

export { controllerConsent, getCheckboxConsentData, getPolicyDocument };
