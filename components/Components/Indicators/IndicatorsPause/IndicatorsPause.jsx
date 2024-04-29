import "./IndicatorsPause.scss";

import MediaViewer from "@/components/Components/MediaViewer";
import StyledIndicator from "@/styles/helpers.styled";

const IndicatorsPause = ({ playIndicator, pauseIndicator, pause, handlePause }) => (
  <StyledIndicator
    $width={playIndicator?.file.details.image.width}
    className='indicators-pause'
    onClick={() => handlePause(!pause)}
    onKeyDown={() => handlePause(!pause)}
    role='button'
  >
    <MediaViewer media={pause ? playIndicator : pauseIndicator} />
  </StyledIndicator>
);



export default IndicatorsPause;
