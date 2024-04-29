import "./PageContent.scss";
import cx from "classnames";
const PageContent = ({ children, className, marginBottom, marginTop, paddingBottom, paddingTop }) => {
  const defaultClassName = "page-content";
  const classNames = cx(
    defaultClassName,
    {
      "page-content--margin-bottom": marginBottom,
      "page-content--margin-top": marginTop,
      "page-content--padding-bottom": paddingBottom,
      "page-content--padding-top": paddingTop
    },
    className
  );

  return <div className={classNames}>{children}</div>;
};

export default PageContent;
