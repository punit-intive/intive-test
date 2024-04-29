"use client"
import "./PresenterFullWidth.scss";

import Button from "@/components/Components/Forms/Button";
import MediaViewer from "@/components/Components/MediaViewer";
import calculateIndex from "@/helpers/calculateIndex";
import JsonParser from "@/helpers/JsonParser";
import Constants from "@/constants";
import { useSwipeable } from "react-swipeable";
import cx from 'classnames';


import { defaultSwipeConfig } from "@/config";
import StyledInfo from "./PresenterFullWidth.styled";

const PresenterFullWidth = ({ slides, indexToShow, onSwipe, setPortalRef, className }) => {
  const mediaToShow = slides[indexToShow];
   
  const titlePrepared = JsonParser(mediaToShow.title);
  const mediaToShowDesc = JsonParser(mediaToShow.description);

  const indexLeft = indexToShow + Constants.DIRECTIONS.AS_INTEGER.LEFT;
  const indexRight = indexToShow + Constants.DIRECTIONS.AS_INTEGER.RIGHT;

  const shouldShowButton = mediaToShow.url && mediaToShow.buttonLabel;

  const handleSetMediaIndex = newIndex => {
    const finalIndex = calculateIndex(newIndex, slides.length);

    onSwipe(finalIndex);
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => handleSetMediaIndex(indexRight),
    onSwipedRight: () => handleSetMediaIndex(indexLeft),
    ...defaultSwipeConfig
  });
  return (
    <div className={cx("presenter-full-width", className)} {...swipeHandlers}>
      <div className='presenter-full-width__media'>
        {!!titlePrepared && <h1>{titlePrepared}</h1>}

        <MediaViewer media={mediaToShow.media} />
      </div>
      <StyledInfo
        ref={setPortalRef}
        bgColor={mediaToShow.color1}
        fontColor={mediaToShow.color2}
        className='presenter-full-width__info presenter-full-width-info'
      >
        {!!mediaToShowDesc && <div className='presenter-full-width-info__text'>{mediaToShowDesc}</div>}
        {shouldShowButton && (
          <Button url={mediaToShow.url} customButtonStyle={mediaToShow.customButtonStyle}>
            {mediaToShow.buttonLabel}
          </Button>
        )}
        
      </StyledInfo>
    </div>
  );
};


export default PresenterFullWidth;
