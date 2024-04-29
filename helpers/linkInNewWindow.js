export default selector => {
  if (typeof window === `undefined`) {
    return null;
  }

  const blocks = [...document.querySelectorAll(selector)];

  blocks.forEach(block => {
    const links = [...block.querySelectorAll("a")];
    links.forEach(link => {
      // eslint-disable-next-line
      link.target = "_blank"
    });
  });
  return null;
};
