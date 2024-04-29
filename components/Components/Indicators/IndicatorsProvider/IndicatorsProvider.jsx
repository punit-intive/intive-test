import IndicatorsArrows from "../IndicatorsArrows";
import IndicatorsArrowsOnSlide from "../IndicatorsArrowsOnSlide";
import IndicatorsDots from "../IndicatorsDots";
import IndicatorsDotsAndArrows from "../IndicatorsDotsAndArrows";
import IndicatorsDotsOnSlide from "../IndicatorsDotsOnSlide";

const IndicatorsProvider = ({
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
  const indicatorsMap = new Map();
  indicatorsMap.set("arrows", IndicatorsArrows);
  indicatorsMap.set("arrows-on-slide", IndicatorsArrowsOnSlide);
  indicatorsMap.set("dots", IndicatorsDots);
  indicatorsMap.set("dots-on-slide", IndicatorsDotsOnSlide);
  indicatorsMap.set("dots-and-arrows", IndicatorsDotsAndArrows);
  indicatorsMap.set("default", IndicatorsArrows);

  const Indicators = indicatorsMap.get(indicators?.style || "default") || indicatorsMap.get("default");

  return (
    <Indicators
      indicators={indicators}
      indexToShow={indexToShow}
      itemsNumber={itemsNumber}
      portalRef={portalRef}
      onSetMediaIndex={onSetMediaIndex}
      className={className}
      pause={pause}
      handlePause={handlePause}
      isAutoEnabled={isAutoEnabled}
    />
  );
};


export default IndicatorsProvider;
