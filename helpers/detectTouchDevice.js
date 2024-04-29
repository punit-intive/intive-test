export default () => {
  const toMatch = [/Android/i, /webOS/i, /iPhone/i, /iPad/i, /iPod/i, /Macintosh/i, /BlackBerry/i, /Windows Phone/i];

  if (typeof navigator !== "undefined") {
    return toMatch.some(toMatchItem => navigator.userAgent.match(toMatchItem));
  }
  return false;
};
