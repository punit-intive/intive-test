const handleKeyDownOnResults = (event, searchResultsRef) => {
  if (searchResultsRef.current) {
    let selectedIdx = Array.from(searchResultsRef.current.children).indexOf(searchResultsRef.current.querySelector(".selected"));

    switch (event.key) {
      case "ArrowUp":
        searchResultsRef.current.focus();

        if (selectedIdx !== -1) {
          searchResultsRef.current.children[selectedIdx].classList.remove("selected");
        }

        selectedIdx = selectedIdx > 0 ? (selectedIdx -= 1) : 0;

        searchResultsRef.current.children[selectedIdx].classList.add("selected");
        searchResultsRef.current.children[selectedIdx].focus();
        break;
      case "ArrowDown":
        searchResultsRef.current.focus();

        if (selectedIdx !== -1) {
          searchResultsRef.current.children[selectedIdx].classList.remove("selected");
        }

        selectedIdx =
          selectedIdx < searchResultsRef.current.children.length - 1 ? (selectedIdx += 1) : searchResultsRef.current.children.length - 1;

        searchResultsRef.current.children[selectedIdx].classList.add("selected");
        searchResultsRef.current.children[selectedIdx].focus();
        break;
      case "Enter":
        if (searchResultsRef.current.querySelector(".selected")) {
          searchResultsRef.current.querySelector(".selected > a").click();
        }
        break;
      case "Escape":
        if (searchResultsRef.current.querySelector(".selected")) {
          searchResultsRef.current.querySelector(".selected").classList.remove("selected");
        }
        break;
      default:
    }
  }
};

export default handleKeyDownOnResults;
