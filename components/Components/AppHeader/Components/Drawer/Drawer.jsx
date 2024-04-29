import "./Drawer.scss";

import { forwardRef } from "react";

import PageContent from "../../../PageContent";

const Drawer = forwardRef(({ withPageContent, className, children }, ref) => {
  const childrenRenderer = withPageContent ? <PageContent>{children}</PageContent> : children;

  return (
    <div className={cx("drawer", className)} ref={ref}>
      {childrenRenderer}
    </div>
  );
});



export default Drawer;
