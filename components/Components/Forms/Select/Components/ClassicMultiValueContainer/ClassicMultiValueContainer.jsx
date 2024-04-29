import PageContext from "@/contexts/PageContext";
import __ from "@/helpers/translate";
import { useContext } from "react";
import { components } from "react-select";

const ClassicMultiValueContainer = ({ children, ...props }) => {
  const { language } = useContext(PageContext);

  const showCounter = children[0]?.length;
  const areAllSelected = showCounter && children[0].length === props.options.length;

  return (
    <components.ValueContainer {...props}>
      {showCounter ? (
        <>
          <div>{areAllSelected ? __("dropdown.allselected", language) : `${children[0].length} ${__("dropdown.selected", language)}`}</div>

          {children[1]}
        </>
      ) : (
        children
      )}
    </components.ValueContainer>
  );
};


export default ClassicMultiValueContainer;
