import "./PresenterClassic.scss";

import MediaViewer from "@/components/Components/MediaViewer";
import calculateIndex from "@/helpers/calculateIndex";
import HTMLParserFromRaw from "@/helpers/HTMLParserFromRaw";
import Constants from "@/constants";
import { useSwipeable } from "react-swipeable";
import { defaultSwipeConfig } from "@/config";

const PresenterClassic = ({ slides, indexToShow, onSwipe, setPortalRef, className }) => {
  const mediaToShow = slides[indexToShow];

  const isImage = mediaToShow.media?.file.contentType.includes(Constants.CONTENT_TYPES.IMAGE);

  const indexLeft = indexToShow + Constants.DIRECTIONS.AS_INTEGER.LEFT;
  const indexRight = indexToShow + Constants.DIRECTIONS.AS_INTEGER.RIGHT;

  const slideTitle = HTMLParserFromRaw(mediaToShow.title, true);
  const slideDesc = HTMLParserFromRaw(mediaToShow.description);

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
      className={cx("presenter-classic", { "presenter-classic--url": !!mediaToShow?.url }, className)}
      {...swipeHandlers}
      onClick={() => onClickSlide(mediaToShow?.url)}
      onKeyDown={() => onClickSlide(mediaToShow?.url)}
      role='button'
      tabIndex={0}
    >
      <div className='presenter-classic__media' ref={setPortalRef}>
        <MediaViewer media={mediaToShow.media} />
      </div>

      {isImage && (slideTitle || slideDesc) && (
        <div className='presenter-info'>
          {!!slideTitle && <span>{slideTitle}</span>}

          {!!slideDesc && <span>{slideDesc}</span>}
        </div>
      )}
    </div>
  );
};


export default PresenterClassic;
