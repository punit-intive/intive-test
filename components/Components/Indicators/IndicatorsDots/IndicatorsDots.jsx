import "./IndicatorsDots.scss";

import MediaViewer from "@/components/Components/MediaViewer";
import StyledIndicator from "@/styles/helpers.styled";

import IndicatorsPause from "../IndicatorsPause";

const IndicatorsDots = ({ indicators, itemsNumber, indexToShow, onSetMediaIndex, className, pause, handlePause, isAutoEnabled }) => {
  const indicatorActive = indicators?.indicator1;
  const indicator = indicators?.indicator2;
  const pauseIndicator = indicators?.pauseIndicator;
  const playIndicator = indicators?.playIndicator;

  return (
    <div className={cx("indicators-dots", className)}>
      {isAutoEnabled && pauseIndicator && playIndicator && (
        <IndicatorsPause playIndicator={playIndicator} pauseIndicator={pauseIndicator} pause={pause} handlePause={handlePause} />
      )}

      {[...Array(itemsNumber).keys()].map(i => {
        const isActive = i === indexToShow;
        const currentIndicator = isActive ? indicatorActive : indicator;

        return (
          <StyledIndicator
            $width={currentIndicator?.file.details.image.width}
            className={cx("indicators-dots__dot", { "indicators-dots__dot--active": isActive })}
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
  );
};



export default IndicatorsDots;
