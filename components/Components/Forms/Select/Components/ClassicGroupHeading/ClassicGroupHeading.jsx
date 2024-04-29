import "./ClassicGroupHeading.scss";

import { useState } from "react";
import { components } from "react-select";

const ClassicGroupHeading = ({ id, children, ...props }) => {
  const [collapsed, setCollapsed] = useState(false);

  const arrow = collapsed ? "icon-arrow-down" : "icon-arrow-up";

  const onClickSelectHeader = () => {
    const node = document.querySelector(`#${id}`)?.parentElement.parentElement.nextElementSibling;
    const classes = node.classList;

    if (collapsed) {
      classes.remove("collapsed");

      setCollapsed(false);
    } else {
      classes.add("collapsed");

      setCollapsed(true);
    }
  };

  return (
    <div className='group-heading' role='button' onClick={onClickSelectHeader} onKeyDown={onClickSelectHeader} tabIndex={0}>
      <div>
        <components.GroupHeading {...props} />
      </div>

      <div>
        <i className={`icon ${arrow}`} />
      </div>
    </div>
  );
};



export default ClassicGroupHeading;
