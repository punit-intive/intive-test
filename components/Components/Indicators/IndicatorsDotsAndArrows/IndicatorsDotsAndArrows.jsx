import "./IndicatorsDotsAndArrows.scss";

import MediaViewer from "@/components/Components/MediaViewer";
import calculateIndex from "@/helpers/calculateIndex";
import Constants from "@/constants";
import StyledIndicator from "@/styles/helpers.styled";

import IndicatorsDots from "../IndicatorsDots";

const IndicatorsDotsAndArrows = ({
  indicators,
  indexToShow,
  itemsNumber,
  onSetMediaIndex,
  className,
  pause,
  handlePause,
  isAutoEnabled
}) => {
  const { indicator3, indicator4, ...indicatorsDotsItems } = indicators;

  const indexLeft = indexToShow + Constants.DIRECTIONS.AS_INTEGER.LEFT;
  const indexRight = indexToShow + Constants.DIRECTIONS.AS_INTEGER.RIGHT;

  const handleSetMediaIndex = newIndex => {
    const finalIndex = calculateIndex(newIndex, itemsNumber);

    onSetMediaIndex(finalIndex);
  };

  return (
    <div className={cx("indicators-dots-and-arrows", "mobile-select", className)}>
      {indicator3 && (
        <StyledIndicator
          $width={indicator3?.file.details.image.width}
          className='indicators-dots-and-arrows__left'
          onClick={() => handleSetMediaIndex(indexLeft)}
          onKeyDown={() => handleSetMediaIndex(indexLeft)}
          role='button'
          tabIndex={0}
        >
          <MediaViewer media={indicator3} />
        </StyledIndicator>
      )}

      {indicatorsDotsItems?.indicator1 && indicatorsDotsItems?.indicator2 && (
        <IndicatorsDots
          indicators={indicatorsDotsItems}
          itemsNumber={itemsNumber}
          onSetMediaIndex={onSetMediaIndex}
          indexToShow={indexToShow}
          pause={pause}
          handlePause={handlePause}
          isAutoEnabled={isAutoEnabled}
        />
      )}

      {indicator4 && (
        <StyledIndicator
          $width={indicator4?.file.details.image.width}
          className='indicators-dots-and-arrows__right'
          onClick={() => handleSetMediaIndex(indexRight)}
          onKeyDown={() => handleSetMediaIndex(indexRight)}
          role='button'
          tabIndex={0}
        >
          <MediaViewer media={indicator4} />
        </StyledIndicator>
      )}
    </div>
  );
};


export default IndicatorsDotsAndArrows;
