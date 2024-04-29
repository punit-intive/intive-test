import "./IndicatorsArrowsOnSlide.scss";

import MediaViewer from "@/components/Components/MediaViewer";
import Portal from "@/components/Components/Portal";
import calculateIndex from "@/helpers/calculateIndex";
import Constants from "@/constants";
import StyledIndicator from "@/styles/helpers.styled";
import { useEffect } from "react";

const IndicatorsArrowsOnSlide = ({ indicators, indexToShow, itemsNumber, onSetMediaIndex, portalRef, className }) => {
  const indicator1 = indicators?.indicator1;
  const indicator2 = indicators?.indicator2;

  const indexLeft = indexToShow + Constants.DIRECTIONS.AS_INTEGER.LEFT;
  const indexRight = indexToShow + Constants.DIRECTIONS.AS_INTEGER.RIGHT;

  const handleSetMediaIndex = newIndex => {
    const finalIndex = calculateIndex(newIndex, itemsNumber);

    onSetMediaIndex(finalIndex);
  };

  useEffect(() => {
    if (portalRef && !portalRef.className.includes("portal-indicators")) {
      portalRef.classList.add("portal-indicators");
    }
  });

  return (
    <Portal toElem={portalRef}>
      <div className={cx("indicators-arrows-onslide", className)}>
        {indicator1 && (
          <StyledIndicator
            $width={indicator1?.file.details.image.width}
            className='indicators-arrows-onslide__left'
            onClick={() => handleSetMediaIndex(indexLeft)}
            onKeyDown={() => handleSetMediaIndex(indexLeft)}
            role='button'
            tabIndex={0}
          >
            <MediaViewer media={indicator1} />
          </StyledIndicator>
        )}

        {indicator2 && (
          <StyledIndicator
            $width={indicator2?.file.details.image.width}
            className='indicators-arrows-onslide__right'
            onClick={() => handleSetMediaIndex(indexRight)}
            onKeyDown={() => handleSetMediaIndex(indexRight)}
            role='button'
            tabIndex={0}
          >
            <MediaViewer media={indicator2} />
          </StyledIndicator>
        )}
      </div>
    </Portal>
  );
};



IndicatorsArrowsOnSlide.defaultProps = {
  portalRef: undefined
};

export default IndicatorsArrowsOnSlide;
