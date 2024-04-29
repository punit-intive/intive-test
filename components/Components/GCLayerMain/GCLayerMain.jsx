import Background from "./Components/Background";
import StyledGCLayerMain from "./GCLayerMain.styled";
import cx from "classnames";


const GCLayerMain = ({ customStyle, className, children }) => {
  return (
    <StyledGCLayerMain customStyle={customStyle} className={ cx("main-gc-layer", className)}>
      <Background
        backgroundImage={customStyle?.backgroundImage}
        backgroundImageFit={customStyle?.backgroundImageFit}
        backgroundStyle={customStyle?.backgroundStyle}
        backgroundColor1={customStyle?.backgroundColor1}
        backgroundColor2={customStyle?.backgroundColor2}
      />

      {children}
    </StyledGCLayerMain>
  );
};



export default GCLayerMain;
