import Constants from "@/constants";

import MediaVideo from "../MediaVideo";
import Image from "next/image";

const MediaViewer = ({
  media,
  mediaFit,
  mediaLoading,
  altForImage,
  videoPoster,
  videoPreload,
  videoLoop,
  videoControls,
  videoAutoplay,
  videoMute,
  videoPlaysInline
}) => {
  const isImage = media?.contentType?.includes(Constants.CONTENT_TYPES.IMAGE);
  const isImageSVG = media?.contentType?.includes(Constants.CONTENT_TYPES.IMAGE_SVG);
  const altFinal = altForImage || media?.description;
  if (isImage && !isImageSVG) {
    return <img loading='lazy' src={media.url} alt={altFinal || ""} />;
  }

  if (isImage && isImageSVG) {
    return <img loading='lazy' src={media.url} alt={altFinal || ""} />;
  }

  return (
    <MediaVideo
      src={media?.file?.url}
      contentType={media?.file?.contentType}
      poster={videoPoster?.file?.url}
      preload={videoPreload}
      shouldLoop={videoLoop}
      showControls={videoControls}
      shouldAutoplay={videoAutoplay}
      shouldMute={videoMute}
      shouldPlaysInline={videoPlaysInline}
    />
  );
};

export default MediaViewer;
