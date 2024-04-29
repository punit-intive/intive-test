import "./PresenterRevolver.scss";

import MediaViewer from "@/components/Components/MediaViewer";
import calculateIndex from "@/helpers/calculateIndex";
import HTMLParserFromRaw from "@/helpers/HTMLParserFromRaw";
import Constants from "@/constants";

import { useEffect, useRef } from "react";
import { useSwipeable } from "react-swipeable";

import { defaultSwipeConfig } from "@/config";
import manipulateCarousel from "./helpers/manipulateCarousel";

const PresenterRevolver = ({ slides, indexToShow, onSwipe, setPortalRef, className }) => {
  const refContainer = useRef();

  const indexLeft = indexToShow + Constants.DIRECTIONS.AS_INTEGER.LEFT;
  const indexRight = indexToShow + Constants.DIRECTIONS.AS_INTEGER.RIGHT;

  const isImage = slides[indexToShow].media?.file.contentType.includes(Constants.CONTENT_TYPES.IMAGE);

  let slideIndicatorClass = "";

  if (slides.length > 1 && slides.length <= 3) {
    slideIndicatorClass = "slides3";
  } else if (slides.length > 3 && slides.length <= 5) {
    slideIndicatorClass = "slides5";
  } else if (slides.length > 5) {
    slideIndicatorClass = "slides7";
  }

  const onClickSlide = url => {
    if (!url) {
      return;
    }

    navigate(url);
  };

  const handleSetMediaIndex = newIndex => {
    const finalIndex = calculateIndex(newIndex, slides.length);

    onSwipe(finalIndex);
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => handleSetMediaIndex(indexRight),
    onSwipedRight: () => handleSetMediaIndex(indexLeft),
    ...defaultSwipeConfig
  });

  useEffect(() => {
    manipulateCarousel(refContainer, indexToShow, slides.length);
  }, [indexToShow]);

  return (
    <div className={cx("presenter-revolver", className)} ref={refContainer}>
      <div className='presenter-revolver__viewport' {...swipeHandlers}>
        {slides.map((slide, index) => {
          const slideTitle = HTMLParserFromRaw(slide.title, true);
          const slideDesc = HTMLParserFromRaw(slide.description, true);

          return (
            <div
              className={`img-${index}`}
              key={slide.contentful_id}
              onClick={() => onClickSlide(slide?.url)}
              onKeyDown={() => onClickSlide(slide?.url)}
              role='button'
              tabIndex={0}
            >
              <MediaViewer media={slide.media} mediaLoading='lazy' />

              {isImage && (!!slideTitle || !!slideDesc) && (
                <div className='presenter-info mobile-select'>
                  {!!slideTitle && <span>{slideTitle}</span>}

                  {!!slideDesc && <span>{slideDesc}</span>}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div ref={setPortalRef} className={cx("presenter-revolver__portal", slideIndicatorClass)} />
    </div>
  );
};


export default PresenterRevolver;
