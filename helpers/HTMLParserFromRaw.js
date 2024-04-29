import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import HTMLReactParser from "html-react-parser";

import { sanitize } from "./sanitizer";

const HTMLParserFromRaw = (parsingElem, replaceParagraph = false) => {
  if (!parsingElem || !parsingElem?.raw) {
    return null;
  }

  if (parsingElem && !parsingElem?.raw) {
    return parsingElem;
  }

  const finalContent = documentToHtmlString(JSON.parse(parsingElem?.raw ?? null));

  return HTMLReactParser(sanitize(replaceParagraph ? finalContent.replaceAll("<p>", "").replaceAll("</p>", "") : finalContent));
};



export default HTMLParserFromRaw;
