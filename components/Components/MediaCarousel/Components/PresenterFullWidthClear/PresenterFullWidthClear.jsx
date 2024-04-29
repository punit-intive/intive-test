import "./PresenterFullWidthClear.scss";

import MediaViewer from "@/components/Components/MediaViewer";
import PageContent from "@/components/Components/PageContent";
import calculateIndex from "@/helpers/calculateIndex";
import HTMLParserFromRaw from "@/helpers/HTMLParserFromRaw";
import Constants from "@/constants";
import { useSwipeable } from "react-swipeable";

import { defaultSwipeConfig } from "@/config";
import StyledRect from "./PresenterFullWidthClear.styled";

const PresenterFullWidthClear = ({ slides, indexToShow, onSwipe, setPortalRef, className }) => {
  const mediaToShow = slides[indexToShow];

  const titlePrepared = HTMLParserFromRaw(mediaToShow.title, true);

  const descPrepared = HTMLParserFromRaw(mediaToShow.description, true);

  const indexLeft = indexToShow + Constants.DIRECTIONS.AS_INTEGER.LEFT;
  const indexRight = indexToShow + Constants.DIRECTIONS.AS_INTEGER.RIGHT;

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

  return (
    <div
      className={cx("presenter-full-width-clear", className)}
      {...swipeHandlers}
      onClick={() => onClickSlide(mediaToShow?.url)}
      onKeyDown={() => onClickSlide(mediaToShow?.url)}
      role='button'
      tabIndex={0}
    >
      <div className='presenter-full-width-clear__media'>
        <MediaViewer media={mediaToShow.media} />

        {(!!titlePrepared || !!descPrepared) && (
          <div className='presenter-full-width-clear__info'>
            <PageContent>
              {!!titlePrepared && <h1>{titlePrepared}</h1>}

              {!!descPrepared && <h3>{descPrepared}</h3>}
            </PageContent>
          </div>
        )}
      </div>

      <StyledRect
        ref={setPortalRef}
        bgColor={mediaToShow.color1}
        fontColor={mediaToShow.color2}
        className='presenter-full-width-clear__rect presenter-full-width-clear-rect'
      />
    </div>
  );
};


export default PresenterFullWidthClear;
