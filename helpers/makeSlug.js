/**
 * !! this is also used by gatbsyjs context without babel, so no export default!!
 *
 *
 * Create a slug(link) from given string
 * Slug is used as an identifier for page, so for example,
 * page with title:
 * `Lifestyle banking. Deepen customer engagement on the mobile channel.`
 * should have slug:
 * `lifestyle-banking-deepen-customer-engagement-on-the-mobile-channel`
 *
 * @param {Object} string - string tht will be sluggified
 */

module.exports = string => {
  let finalString = string.replace(/^\s+|\s+$/g, ""); // trim

  // special chars from regexp should be replaced separately
  const replaceRegexpSensitive = [".", "?", "*", "(", ")", "!", "@", "#", "$", "%", "^", "&"];

  replaceRegexpSensitive.forEach(char => {
    finalString = finalString.replace(char, "");
  });

  finalString = finalString.replace("\\", "");

  finalString = finalString.toLowerCase();

  // remove accents for all languages
  const from = "ÁÄÂÀÃÅČÇĆĎÉĚËÈÊẼĔȆĞÍÌÎÏİŇÑÓÖÒÔÕØŘŔŠŞŤÚŮÜÙÛÝŸŽáäâàãåčçćďéěëèêẽĕȇğíìîïıňñóöòôõøðřŕšşťúůüùûýÿžþÞĐđßÆa·/_,:;’";
  const to = "AAAAAACCCDEEEEEEEEGIIIIINNOOOOOORRSSTUUUUUYYZaaaaaacccdeeeeeeeegiiiiinnooooooorrsstuuuuuyyzbBDdBAa-------";

  // eslint-disable-next-line
  for (let letterIndex = 0; letterIndex < from.length; letterIndex++) {
    finalString = finalString.replace(new RegExp(from.charAt(letterIndex), "g"), to.charAt(letterIndex));
  }

  finalString = finalString
    .replace(/\s+/g, "-") // collapse whitespace and replace by -
    .replace(/-+/g, "-"); // collapse dashes

  if (finalString[finalString.length - 1] === "-") {
    finalString = finalString.slice(0, finalString.length - 1);
  }

  return finalString;
};
