import { useEffect } from "react";

const useClickOutside = (ref, selector, callback, eventType = "click", condition = true) => {
  useEffect(() => {
    const parentNode = ref && Object.prototype.hasOwnProperty.call(ref, "current") ? ref.current : document.querySelector(selector);

    const handleClickOutside = event => {
      if (parentNode && !parentNode.contains(event.target)) {
        callback();
      }
    };

    if (condition) {
      document.addEventListener(eventType, handleClickOutside, false);
    }

    return () => document.removeEventListener(eventType, handleClickOutside, false);
  }, []);
};

export default useClickOutside;
