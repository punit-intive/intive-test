/* eslint-disable jsx-a11y/label-has-associated-control */
import "./Input.scss";

import __ from "@/helpers/translate";
import { useEffect, useRef, useState } from "react";
import { useFormContext, useWatch } from "react-hook-form";

const Input = ({
  name,
  label,
  type,
  language,
  placeholder,
  hideLabel,
  icon,
  required,
  minLength,
  maxLength,
  min,
  max,
  pattern,
  autocomplete
}) => {
  const [active, setActive] = useState(false);

  const {
    register,
    formState: { errors }
  } = useFormContext();

  const watchValue = useWatch({ name });

  const inputRef = useRef();

  const options = {
    ...(required && { required }),
    ...(minLength && { minLength }),
    ...(maxLength && { maxLength }),
    ...(min && { min }),
    ...(max && { max }),
    ...(pattern && { pattern: new RegExp(pattern) }),
    ...(!pattern && type === "email" && { pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ })
  };

  const InputComponent =
    type === "textarea" ? (
      <textarea id={name} {...register(name, options)} />
    ) : (
      <>
        {icon && <span className='icon material-symbols-outlined'>{icon}</span>}

        <input id={name} type={type} placeholder={placeholder} autoComplete={autocomplete} {...register(name, options)} />
      </>
    );

  const errorMessage = errors[name] && `${label} ${__(`forms.validation.${errors[name].type}`, language)}`;
  const selector = type === "textarea" ? "textarea" : "input";

  const deactivateInput = () => {
    const inputElem = inputRef.current.querySelector(selector);
    const hasValue = !!watchValue;

    if (hasValue) {
      return;
    }

    if (document.activateInput !== inputElem) {
      setActive(false);
    }
  };

  const activateInput = () => {
    if (active) {
      return;
    }

    const inputElem = inputRef.current.querySelector(selector);

    setActive(true);

    inputElem.focus();
  };

  useEffect(() => {
    deactivateInput();
  }, [watchValue]);

  return (
    <div
      onClick={activateInput}
      onKeyDown={activateInput}
      onFocus={activateInput}
      onBlur={deactivateInput}
      className={cx(
        "n-input",
        `n-input-${type}`,
        { "n-input--icon": !!icon },
        { "n-input--active": active && !hideLabel },
        { "n-input--no-label--active": active && hideLabel },
        { "n-input--error": errors[name] }
      )}
      ref={inputRef}
      role='button'
      tabIndex={0}
    >
      {!hideLabel && !placeholder && (
        <label data-testid='n-input__label' htmlFor={name} id={name} className={cx({ caption: active })}>
          {`${label || name}${required ? "*" : ""}`}
        </label>
      )}

      {InputComponent}

      {errors[name] && <span className='icon material-symbols-outlined'>error</span>}

      {errors[name] && <span className='n-input__error caption'>{errorMessage}</span>}
    </div>
  );
};



export default Input;
