import { useEffect } from "react";

const useScreenResize = callback => {
  useEffect(() => {
    let startWidth = window.innerWidth;

    const handleCallback = () => {
      if (window.innerWidth !== startWidth) {
        startWidth = window.innerWidth;

        callback();
      }
    };

    window.addEventListener("resize", handleCallback);

    callback();

    return () => window.removeEventListener("resize", handleCallback);
  }, []);
};

export default useScreenResize;
