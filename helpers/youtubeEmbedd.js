const recurrence = (array, regex, block) => {
  const regexpResult = regex.exec(block);
  if (regexpResult !== null) {
    array.push(regexpResult);
    recurrence(array, regex, block);
  }
  return array;
};

export default selector => {
  if (typeof window === `undefined`) {
    return null;
  }

  const blocks = [...document.querySelectorAll(selector)];

  blocks.forEach(block => {
    const regex = /\[youtube\][\s\S]*?\[\/youtube\]/gi;
    const youtubeBlocks = [];
    recurrence(youtubeBlocks, regex, block.innerHTML);

    youtubeBlocks.forEach(youtube => {
      const link = youtube[0].replace("[youtube]", "").replace("[/youtube]", "");
      // eslint-disable-next-line
      block.innerHTML = block.innerHTML.replace(
        youtube[0],
        `<div class="youtube"><iframe width="100%" height="350" src="${link}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>`
      );
    });
  });
  return null;
};
