import { components } from "react-select";

const ClassicMultiOption = ({ isSelected, data: { name, label }, ...props }) => (
  <components.Option {...props}>
    <input
      id={(name || label).trim().replace(" ", "-").toLowerCase()}
      name={(name || label).trim().replace(" ", "-").toLowerCase()}
      type='checkbox'
      onChange={() => {}}
      checked={isSelected}
    />

    {label}
  </components.Option>
);


export default ClassicMultiOption;
