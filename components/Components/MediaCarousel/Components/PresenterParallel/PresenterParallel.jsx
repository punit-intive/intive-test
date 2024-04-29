import "./PresenterParallel.scss";

import MediaViewer from "@/components/Components/MediaViewer";
import calculateIndex from "@/helpers/calculateIndex";
import { guuid } from "@/helpers/common";
import HTMLParserFromRaw from "@/helpers/HTMLParserFromRaw";
import useDetectMobile from "@/hooks/useDetectMobile";
import useScreenResize from "@/hooks/useScreenResize";
import Constants from "@/constants";
import { useEffect, useRef, useState } from "react";
import { useSwipeable } from "react-swipeable";

import { defaultSwipeConfig } from "@/config";

const PresenterParallel = ({ slides, indexToShow, onSwipe, className }) => {
  const [offsetWidth, setOffsetWidth] = useState();
  const refContainer = useRef();

  const indexLeft = indexToShow + Constants.DIRECTIONS.AS_INTEGER.LEFT;
  const indexRight = indexToShow + Constants.DIRECTIONS.AS_INTEGER.RIGHT;
  const { isMobile } = useDetectMobile();

  const handleSetMediaIndex = newIndex => {
    const finalIndex = calculateIndex(newIndex, slides.length);

    onSwipe(finalIndex);
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => handleSetMediaIndex(indexRight),
    onSwipedRight: () => handleSetMediaIndex(indexLeft),
    ...defaultSwipeConfig
  });

  const manipulateCarousel = () => {
    if (refContainer.current) {
      const containerWidth = refContainer.current.offsetWidth;
      const containerPositionCenterX = containerWidth / 2;
      const viewportElem = refContainer.current.querySelector(".presenter-parallel__viewport");
      const viewportImgElems = viewportElem.childNodes;
      const additionalMargin = isMobile ? 4 : 10;

      let moveValue = 0;

      for (let i = 0; i <= indexToShow; i += 1) {
        const imgCurrentElem = viewportImgElems[i];
        const division = i === indexToShow ? 2 : 1;
        const additionMargin = i === indexToShow ? 0 : 10; // TODO: Przydaloby sie zczytac jakos margin-right elementu img

        moveValue += imgCurrentElem.offsetWidth / division + additionMargin;
      }

      const selectedImagePositionCenterX = containerPositionCenterX - moveValue;

      viewportElem.style.transition = "transform 250ms ease";
      viewportElem.style.transform = `translateX(${
        selectedImagePositionCenterX - slides.length * (viewportImgElems[indexToShow].offsetWidth + additionalMargin)
      }px)`;
    }
  };

  const onResize = () => {
    if (refContainer.current) {
      setOffsetWidth(refContainer.current.offsetWidth);
    }
  };

  const visibleSlides = [...slides, ...slides, ...slides];

  useEffect(() => {
    manipulateCarousel();
  }, [indexToShow, offsetWidth]);

  useScreenResize(onResize);

  return (
    <div className={cx("presenter-parallel", className)} ref={refContainer}>
      <div className='presenter-parallel__viewport' data-testid='presenter-parallel__viewport' {...swipeHandlers}>
        {visibleSlides.map(slide => {
          const slideTitle = HTMLParserFromRaw(slide.title, true);

          return (
            <div className='presenter-parallel__media' key={guuid()} role='button' tabIndex={0}>
              <div className='presenter-parallel__image'>
                <MediaViewer media={slide.media} />
              </div>

              {slideTitle && (
                <div data-testid='presenter-parallel__info' className='presenter-parallel__info'>
                  {slideTitle}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};



export default PresenterParallel;
