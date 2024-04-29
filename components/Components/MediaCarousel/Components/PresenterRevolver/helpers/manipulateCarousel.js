const manipulateCarousel = (ref, indexToShow, slidesLength) => {
  const viewportElem = ref.current.querySelector(".presenter-revolver__viewport");
  const divsWithRevElems = viewportElem.querySelectorAll("div[class*='rev']");

  divsWithRevElems.forEach(div => {
    const classNamesToBeRemoved = [];

    div.classList.forEach(value => {
      if (value.includes("rev")) {
        classNamesToBeRemoved.push(value);
      }
    });

    div.classList.remove(...classNamesToBeRemoved);
  });

  const loopIterationCount = slidesLength === 1 ? 1 : Math.ceil((1 + slidesLength) / 2);

  for (let i = 0; i < loopIterationCount; i += 1) {
    const classNormal = `rev${i}`;
    const classNegative = `rev-${i}`;

    if (i === 0) {
      viewportElem.querySelector(`.img-${indexToShow}`).classList.add(classNormal);
    } else {
      const imgIdxPositive = indexToShow + i >= slidesLength ? indexToShow + i - slidesLength : indexToShow + i;

      viewportElem.querySelector(`.img-${imgIdxPositive}`)?.classList.add(classNormal);

      const viewportDivsWithNoRevClass = viewportElem.querySelectorAll(".presenter-revolver__viewport > div:not(div[class*='rev'])");

      if (viewportDivsWithNoRevClass?.length) {
        const imgIdxNegative = indexToShow - i < 0 ? slidesLength - (i - indexToShow) : indexToShow - i;

        viewportElem.querySelector(`.img-${imgIdxNegative}`)?.classList.add(classNegative);
      }
    }
  }
};

export default manipulateCarousel;
