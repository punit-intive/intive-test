import "./Autocomplete.scss";

import useClickOutside from "@hooks/useClickOutside";
import Constants from "@shared/constants";
import { useEffect, useRef, useState } from "react";

import Suggestions from "./Components/Suggestions";
import scrollDivWithSuggestions from "./helpers/scrollDivWithSuggestions";

const Autocomplete = ({ name, value, label, suggestions, onChange, error }) => {
  const [state, setState] = useState({
    activeSuggestion: Constants.FILTERS.CAREERS.SUGGESTION_START_INDEX,
    filteredSuggestions: [],
    userInput: value
  });
  const [show, setShow] = useState(false);
  const [focused, setInputFocus] = useState(false);
  const [touched, setInputTouch] = useState(false);

  const inputRef = useRef({ value: "", hasError: false, errors: [] });
  const suggestionsEl = useRef(null);

  const inputClassName = "input-text";

  const labelClassnames = cx(
    `${inputClassName}__label`,
    touched ? `${inputClassName}__label--touched` : "",
    inputRef.current.hasError ? `${inputClassName}__label--error` : ""
  );

  const wrapperClassname = cx(
    `${inputClassName}`,
    focused ? `${inputClassName}--focused` : "",
    inputRef.current.hasError ? `${inputClassName}--error` : ""
  );

  const handleBlur = event => {
    event?.persist();

    setInputFocus(false);

    if (event?.target.value) {
      setInputTouch(true);
    } else {
      setInputTouch(false);
    }
  };

  const handleWrapperClick = event => {
    event?.persist();

    setInputTouch(true);

    inputRef.current.click();
  };

  const onChangeValue = event => {
    const userInput = event.currentTarget.value;

    const filteredSuggestions = suggestions.filter(suggestion => suggestion.toLowerCase().includes(userInput.toLowerCase()));

    setState({
      activeSuggestion: Constants.FILTERS.CAREERS.SUGGESTION_START_INDEX,
      filteredSuggestions,
      userInput
    });

    setShow(true);

    onChange(userInput);
  };

  const onKeyDown = event => {
    const { activeSuggestion, filteredSuggestions } = state;

    // Enter key
    if (event.keyCode === 13) {
      setState({
        ...state,
        activeSuggestion: Constants.FILTERS.CAREERS.SUGGESTION_START_INDEX,
        userInput: state.filteredSuggestions[activeSuggestion]
      });

      setShow(false);
    }
    // Up Arrow
    else if (event.keyCode === 38) {
      if (activeSuggestion === 0) {
        return;
      }

      setState({ ...state, activeSuggestion: activeSuggestion - 1 });
    }
    // Down Arrow
    else if (event.keyCode === 40) {
      if (activeSuggestion === filteredSuggestions.length - 1) {
        return;
      }

      setState({ ...state, activeSuggestion: activeSuggestion + 1 });
    }
  };

  const onClickSuggestion = event => {
    setState({
      activeSuggestion: Constants.FILTERS.CAREERS.SUGGESTION_START_INDEX,
      filteredSuggestions: [],
      userInput: event.currentTarget.innerText
    });

    setShow(false);
  };

  useClickOutside(suggestionsEl, null, () => setShow(false));

  useEffect(() => {
    if (!value) {
      setState({
        activeSuggestion: Constants.FILTERS.CAREERS.SUGGESTION_START_INDEX,
        filteredSuggestions: [],
        userInput: value
      });

      handleBlur();
    }
  }, [value]);

  useEffect(() => {
    scrollDivWithSuggestions();
  }, [state]);

  useEffect(() => {
    if (value) {
      handleWrapperClick();
    }
  }, []);

  return (
    <div className='autocomplete'>
      <div
        className={cx(wrapperClassname, { "input-text--error": !!error })}
        onClick={handleWrapperClick}
        onKeyDown={handleWrapperClick}
        role='button'
        tabIndex={0}
        ref={suggestionsEl}
      >
        <label htmlFor={name} className={labelClassnames}>
          {label}
        </label>

        <input
          id={name}
          name={name}
          type='text'
          onChange={onChangeValue}
          onKeyDown={onKeyDown}
          onBlur={handleBlur}
          autoComplete='off'
          value={state.userInput}
          className='input-text__component'
          ref={inputRef}
        />
      </div>

      {error && <div className='autocomplete__error input-text__error'>{error}</div>}

      {show && (
        <Suggestions
          userInput={state.userInput}
          filteredSuggestions={state.filteredSuggestions}
          activeSuggestion={state.activeSuggestion}
          onClickSuggestion={onClickSuggestion}
        />
      )}
    </div>
  );
};



export default Autocomplete;
