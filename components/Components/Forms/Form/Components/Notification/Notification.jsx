import downloadFile from "@/helpers/downloadFile";
import scrollInView from "@/helpers/scrollInView";
import { useEffect, useRef } from "react";

import Button from "../../../Button";

const Notification = ({ title, message, back, iconMaterial, iconAsStaticImage, type, fileUrl, onReset }) => {
  const notiRef = useRef();

  useEffect(() => {
    scrollInView(notiRef.current);
  }, []);

  return (
    <div className='form-notification' ref={notiRef}>
      {iconMaterial ? (
        <span className={cx("icon", "material-symbols-outlined", `icon-form-${type}`)}>{iconMaterial}</span>
      ) : (
        iconAsStaticImage
      )}

      <h3>{title}</h3>

      <div className='form-notification__message'>{message}</div>

      {fileUrl && (
        <div className='form-notification__file'>
          <Button iconMaterial='download' type='button' onClick={() => downloadFile(`https:${fileUrl}`)}>
            Download now
          </Button>
        </div>
      )}

      <div className='form-notification__back' onClick={onReset} onKeyDown={onReset} role='button' tabIndex={0}>
        {back}
      </div>
    </div>
  );
};


export default Notification;
