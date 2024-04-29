/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import { sanitize } from "@/helpers/sanitizer";
import HTMLReactParser from "html-react-parser";

const Suggestions = ({ userInput, filteredSuggestions, activeSuggestion, refEl, onClickSuggestion }) => {
  const renderSuggestion = suggestion =>
    HTMLReactParser(
      sanitize(suggestion.replace(new RegExp(userInput.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "gi"), match => `<b>${match}</b>`))
    );

  return (
    <ul className='autocomplete__suggestions' ref={refEl}>
      {filteredSuggestions?.map((suggestion, index) => (
        <li
          className={cx("autocomplete__suggestion", { "autocomplete__suggestion--active": index === activeSuggestion })}
          key={suggestion}
          onClick={onClickSuggestion}
          tabIndex={index}
        >
          {renderSuggestion(suggestion)}
        </li>
      ))}
    </ul>
  );
};



export default Suggestions;
