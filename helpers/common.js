/**
 * !! this is also used by gatbsyjs context without babel, so no export default!!
 * */
const makeSlug = require("./makeSlug");
/**
 * Returns the text from a HTML string
 * default behaviour for empty string is to silently continue
 *
 * @param {html} String The html string
 */
const stripHtml = (html = "") => {
  if (html === "") {
    return "";
  }
  return html?.replace(/(<([^>]+)>)/gi, "");
};

const isDevMode = process.env.NODE_ENV === "development";

const makeKey = (text = "") => text.replace("/ /g", "-").toLowerCase();

const isHomepage = path => path === "/";

// UUID  RFC4122 version 4 compliant
/* eslint-disable */
const guuid = () =>
  "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, c => {
    const r = (Math.random() * 16) | 0;
    const v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
/* eslint-enable */

const generateId = length => {
  let result = "";
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;

  for (let i = 0; i < length; i += 1) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
};

const scroll = (x, y) => {
  if (window.scroll) {
    window.scroll({
      top: y,
      left: x,
      behavior: "smooth"
    });
  } else {
    window.scrollTo(x, y);
  }
};

const scrollUp = () => {
  if (window.pageYOffset !== 0) {
    window.scrollTo(0, 0);
    setTimeout(scrollUp, 10);
  }
};

const getJobLocationShort = location => location.substring(location.indexOf(", ") + 2).toLowerCase();

const isFirstColumn = index => index % 2 === 0;

/**
 * Returns a job post slug based on its jobPosition and contentful_id
 *
 * @param {html} jobPosition joposition title
 * @param {html} contentful_id contentful_id deliver by this jobposition
 */
// eslint-disable-next-line
const makeJobPositionSlug = (jobPosition, jobLocationId, location, lang) => {
  const isMainLanguage = lang === "en";

  const slug = `/careers/${makeSlug(`${jobPosition}-${jobLocationId}-${getJobLocationShort(location)}`)}`;

  return isMainLanguage ? slug : `/${lang}${slug}`;
};

const shortenText = (text, length) => {
  if (text.length > length) {
    return text.slice(0, length).concat("...");
  }

  return text;
};

const range = (start, stop) => (start >= stop ? [] : [start, ...range(start + 1, stop)]);

module.exports = {
  stripHtml,
  isDevMode,
  generateId,
  makeKey,
  guuid,
  scroll,
  scrollUp,
  makeJobPositionSlug,
  isFirstColumn,
  getJobLocationShort,
  isHomepage,
  range,
  shortenText
};
