import PageContext from "@/contexts/PageContext";
import __ from "@/helpers/translate";
import { useContext } from "react";
import { useFormContext } from "react-hook-form";
import { components } from "react-select";

const ClassicMultiMenuList = ({ selectProps: { name, isMulti, value, className }, options, clearValue, children, ...props }) => {
  const { language } = useContext(PageContext);
  const { setValue, resetField } = useFormContext();

  const onSelectAll = () => setValue(name, options);

  const onClear = () => {
    resetField(name);
    clearValue();
  };

  const isSelectAllAvailable = (value?.length ?? 0) !== options.length;
  const isClearAllAvailable = !!value?.length;

  return (
    <components.MenuList {...props}>
      {isMulti && (
        <div className={`${className}__options-control`}>
          <span
            onClick={onSelectAll}
            onKeyDown={onSelectAll}
            role='button'
            tabIndex={0}
            className={cx({ [`${className}__select-all--disabled`]: !isSelectAllAvailable })}
          >
            {__("dropdown.selectall", language)}
          </span>

          <span
            onClick={onClear}
            onKeyDown={onClear}
            role='button'
            tabIndex={0}
            className={cx({ [`${className}__clear-all--disabled`]: !isClearAllAvailable })}
          >
            {__("dropdown.clear", language)}
          </span>
        </div>
      )}

      {children}
    </components.MenuList>
  );
};



export default ClassicMultiMenuList;
