"use client"
import "./MediaCarousel.scss";

import calculateIndex from "@/helpers/calculateIndex";
import { useEffect, useRef, useState } from "react";
import cx from 'classnames'
import GCLayerMain from "../GCLayerMain";
import GCTitleAndDesc from "../GCTitleAndDesc";
import IndicatorsProvider from "../Indicators/IndicatorsProvider";
import PageContent from "../PageContent";
import PresenterClassic from "./Components/PresenterClassic";
import PresenterFullWidth from "./Components/PresenterFullWidth";
import PresenterFullWidthClear from "./Components/PresenterFullWidthClear";
import PresenterParallel from "./Components/PresenterParallel";
import PresenterRevolver from "./Components/PresenterRevolver";
import { getBrandCarousel } from "@/lib/contentful/api";

const MediaCarousel =  ({ title, desc: description, slidesCollection:{items: slides}, slideDuration, styleCarousel, indicators, customStyle, className }) => {
  const [indexToShow, setIndexToShow] = useState(0);
  const [pause, setPause] = useState(false);
  const [portalRef, setPortalRef] = useState(null);

  const intervalRef = useRef();

  const presentersMap = {
    classic: PresenterClassic,
    parallel: PresenterParallel,
    "full-width": PresenterFullWidth,
    "full-width-clear": PresenterFullWidthClear,
    revolver: PresenterRevolver,
    "revolver-rect": PresenterRevolver,
    default: PresenterClassic
  };

  const Presenter = presentersMap[styleCarousel || "default"] || presentersMap.default;

  const onSetMediaIndex = index => {
    clearInterval(intervalRef.current);

    setIndexToShow(index);
  };

  useEffect(() => {
    let intervalId;

    if (slides.length > 1 && slideDuration && !pause) {
      intervalId = setInterval(() => {
        const getNewIndex = prev => calculateIndex(prev + 1, slides.length);

        setIndexToShow(getNewIndex);
      }, slideDuration * 1000);

      intervalRef.current = intervalId;
    }

    return () => clearInterval(intervalId);
  });

  if (!slides) {
    return null;
  }

  const handlePause = pauseStatus => {
    if (!pause) {
      clearInterval(intervalRef.current);
  }

    setPause(pauseStatus);
  };
  

  return (
    <GCLayerMain customStyle={customStyle}>
      <PageContent marginTop marginBottom className={cx("media-carousel", className)}>
        <GCTitleAndDesc
          title={title}
          desc={description}
          showTitle={customStyle?.showTitle}
          showDescription={customStyle?.showDescription}
        />

        <div className='media-carousel__wrapper'>
          <Presenter
            slides={slides}
            indexToShow={indexToShow}
            onSwipe={onSetMediaIndex}
            setPortalRef={setPortalRef}
            className={cx("media-carousel__presenter", { "presenter-revolver--rect": styleCarousel === "revolver-rect" })}
          />

          {slides?.length > 1 && (
            <IndicatorsProvider
              indicators={indicators}
              itemsNumber={slides?.length}
              indexToShow={indexToShow}
              onSetMediaIndex={onSetMediaIndex}
              portalRef={portalRef}
              className='media-carousel__indicators'
              pause={pause}
              handlePause={handlePause}
              isAutoEnabled={!!slideDuration}
            />
          )}
        </div>
      </PageContent>
    </GCLayerMain>
  );
};



export default MediaCarousel;
