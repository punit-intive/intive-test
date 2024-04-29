import { createPortal } from "react-dom";

const Portal = ({ toElem, children }) => {
  if (!toElem) {
    return children;
  }

  return createPortal(children, toElem);
};

export default Portal;
