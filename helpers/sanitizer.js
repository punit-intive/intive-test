import { sanitize } from "isomorphic-dompurify";

const sanitizeAndGetInnerHTML = content => {
  const hasHtmlProp = content && Object.prototype.hasOwnProperty.call(content, "__html");

  return { __html: sanitize(hasHtmlProp ? content.__html : content) };
};

export { sanitize, sanitizeAndGetInnerHTML };
