const scrollDivWithSuggestions = () => {
  const ulEl = document.querySelector(".autocomplete__suggestions");
  const liEl = document.querySelector(".autocomplete__suggestion");
  const liActiveEl = document.querySelector(".autocomplete__suggestion--active");

  if (ulEl && liEl) {
    const viewport = ulEl.scrollTop + ulEl.offsetHeight;
    const selected = Array.prototype.indexOf.call(ulEl.childNodes, liActiveEl);
    const elOffset = liEl.offsetHeight * selected;

    const shouldScrollDiv = elOffset < ulEl?.scrollTop || elOffset + liEl.offsetHeight > viewport;

    if (shouldScrollDiv) {
      ulEl.scrollTop = elOffset;
    }
  }
};

export default scrollDivWithSuggestions;
