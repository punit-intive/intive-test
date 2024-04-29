import "./IndicatorsDotsOnSlide.scss";
import cx from 'classnames';


import MediaViewer from "@/components/Components/MediaViewer";
import Portal from "@/components/Components/Portal";
import StyledIndicator from "@/styles/helpers.styled";
import { useEffect } from "react";

import IndicatorsPause from "../IndicatorsPause";

const IndicatorsDotsOnSlide = ({
  indicators,
  indexToShow,
  itemsNumber,
  onSetMediaIndex,
  portalRef,
  className,
  pause,
  handlePause,
  isAutoEnabled
}) => {
  const indicatorActive = indicators?.indicator1;
  const indicator = indicators?.indicator2;
  const pauseIndicator = indicators?.pauseIndicator;
  const playIndicator = indicators?.playIndicator;

  useEffect(() => {
    if (portalRef && !portalRef.className.includes("portal-indicators")) {
      portalRef.classList.add("portal-indicators");
    }
  });

  useEffect(() => {
    if (portalRef) {
      const isPortalWithIndicatorsAsLastChild =
        portalRef && portalRef.children[portalRef.children.length - 1].className.includes("indicators-dots-onslide");

      if (!isPortalWithIndicatorsAsLastChild) {
        const indicatorsElem = portalRef.querySelector(".indicators-dots-onslide");

        portalRef.append(indicatorsElem);
      }
    }
  });

  return (
    <Portal toElem={portalRef}>
      <div className={cx("indicators-dots-onslide", className)}>
        {isAutoEnabled && pauseIndicator && playIndicator && (
          <IndicatorsPause playIndicator={playIndicator} pauseIndicator={pauseIndicator} pause={pause} handlePause={handlePause} />
        )}

        {[...Array(itemsNumber).keys()].map(i => {
          const isActive = i === indexToShow;
          const currentIndicator = isActive ? indicatorActive : indicator;
          return (
            <StyledIndicator
              $width={currentIndicator?.width}
              className={cx("indicators-dots-onslide__dot", { "indicators-dots-onslide__dot--active": isActive })}
              onClick={() => onSetMediaIndex(i)}
              onKeyDown={() => onSetMediaIndex(i)}
              tabIndex={0}
              role='button'
              key={i}

            >
              
              <MediaViewer media={isActive ? indicatorActive : indicator} />
            </StyledIndicator>
          );
        })}
      </div>
    </Portal>
  );
};



export default IndicatorsDotsOnSlide;
