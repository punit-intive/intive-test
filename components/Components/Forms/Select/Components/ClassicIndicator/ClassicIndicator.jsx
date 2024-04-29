import { components } from "react-select";

const ClassicIndicator = ({ selectProps: { menuIsOpen }, ...props }) => (
  <components.DropdownIndicator {...props}>
    <span className='icon material-symbols-outlined'>{menuIsOpen ? "expand_less" : "expand_more"}</span>
  </components.DropdownIndicator>
);


export default ClassicIndicator;
