import "./Select.scss";

import PageContext from "@/contexts/PageContext";
import __ from "@/helpers/translate";
import { useContext, useEffect, useRef } from "react";
import { Controller, useFormContext } from "react-hook-form";
import ReactSelect from "react-select";

import ClassicIndicator from "./Components/ClassicIndicator";
import ClassicMultiMenuList from "./Components/ClassicMultiMenuList";
import ClassicMultiOption from "./Components/ClassicMultiOption";
import ClassicMultiValueContainer from "./Components/ClassicMultiValueContainer";
import cx from 'classnames';

const Select = ({
  name,
  placeholder,
  label,
  isMulti,
  options,
  isSearchable,
  isClearable,
  hideSelectedOptions,
  closeMenuOnSelect,
  customComponents,
  onChange,
  className,
  classNamePrefix,
  classNameFocusMatch,
  required
}) => {
  const language  = "en";

  const defaultComponents = useRef({
    DropdownIndicator: ClassicIndicator,
    ...(isMulti && { Option: ClassicMultiOption }),
    ...(isMulti && { MenuList: ClassicMultiMenuList }),
    ...(isMulti && { ValueContainer: ClassicMultiValueContainer })
  });

  const {
    control,
    formState: { errors }
  } = useFormContext();

  const validations = {
    ...(required && { required })
  };

  const errorMessage =
    errors[name] && `${name.charAt(0).toUpperCase()}${name.slice(1)} ${__(`forms.validation.${errors[name].type}`, language)}`;

  const handleChangeSelect = (event, fieldOnChange) => {
    onChange(event);

    fieldOnChange(event);
  };

  useEffect(() => {
    if (classNameFocusMatch) {
      const elem = document.querySelector(`.${classNameFocusMatch} input[id^='react-select']`);

      if (elem) {
        elem.focus({ preventScroll: true });
      }
    }
  });

  return (
    <div className={cx("n-select-container", { "n-select-container--error": errors[name] })}>
      <Controller
        name={name}
        control={control}
        rules={validations}
        render={({ field }) => (
          <ReactSelect
            {...field}
            name={name}
            placeholder={placeholder || `${label}${required ? "*" : ""}` || __("dropdown.choose", language)}
            isMulti={isMulti}
            onChange={event => handleChangeSelect(event, field.onChange)}
            components={customComponents || defaultComponents.current}
            className={cx({ "n-select": !className }, className)}
            classNamePrefix={classNamePrefix || "n-select"}
            options={options}
            isSearchable={isSearchable}
            isClearable={isClearable}
            hideSelectedOptions={hideSelectedOptions}
            closeMenuOnSelect={closeMenuOnSelect}
          />
        )}
      />

      {errors[name] && <span className='n-select-container__error caption'>{errorMessage}</span>}
    </div>
  );
};


export default Select;
