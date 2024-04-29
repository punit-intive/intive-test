"use client";
import { useState } from "react";

import { checkIfCustomScreen, checkIfDesktopScreen } from "../helpers/deviceScreenDetectors";
import useScreenResize from "./useScreenResize";

const useDetectMobile = (checkDevices = true, customScreenWidth = null, defaultState = false) => {
  const [isMobile, setIsMobile] = useState(defaultState); // TODO: Niepotrzebny rerender

  const onResize = () => {
    const { userAgent } = navigator;
    const hasScreenDesktopSizes = customScreenWidth ? checkIfCustomScreen(customScreenWidth) : checkIfDesktopScreen();

    const checkWithDevices =
      !!(userAgent && userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i)) || !hasScreenDesktopSizes;

    const result = checkDevices ? checkWithDevices : !hasScreenDesktopSizes;

    setIsMobile(result);
  };

  useScreenResize(onResize);

  return { isMobile };
};

export default useDetectMobile;
