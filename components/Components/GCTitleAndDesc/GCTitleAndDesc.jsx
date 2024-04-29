import "./GCTitleAndDesc.scss";
import cx from "classnames";



const GCTitleAndDesc = ({ title, desc, renderDesc, showTitle, showDescription, className }) => {
  const shouldShowComponent = (showTitle && title) || (showDescription && desc);
  const shouldShowDesc = showDescription && desc;

  // const Description =
  //   desc && renderDesc ? renderDesc(desc) : <RenderRichContentfulText className='gc-title-and-desc__description' content={desc} />;

  return (
    shouldShowComponent && (
      <div className={cx("gc-title-and-desc", className)}>
        {/* {showTitle && title && <RenderRichContentfulText className='gc-title-and-desc__title' content={title} />} */}

        {shouldShowDesc && Description}
      </div>
    )
  );
};
export default GCTitleAndDesc;
