import __ from "@/helpers/translate";
import Constants from "@shared/constants";

import FileInfo from "../FileInfo";

const UploadAreaDrop = ({ name, register, registerOptions, values, setValue, errors, language, mainRef, isMulti, maxFileSizeMB }) => {
  const errorFilesId =
    ((errors[name]?.type === "maxFileSize" || errors[name]?.type === "acceptedFileTypes") && errors[name]?.message.split(",")) || [];

  const errorMsgForFile = __(
    errors[name]?.type === "maxFileSize" ? "forms.validation.maxFileSize" : "forms.validation.acceptedFileTypes",
    language
  ).replace(Constants.TRANSLATIONS_DYNAMIC.UPLOAD_MAX_FILE_SIZE, maxFileSizeMB);

  const onClickInputFile = () => {
    const inputEl = mainRef.current.querySelector("input");

    inputEl.click();
  };

  const onDrop = event => {
    event.preventDefault();

    if (event.dataTransfer.files?.length) {
      const files = [...(values || []), ...event.dataTransfer.files];

      setValue(name, files, { shouldValidate: true });
    }
  };

  const onDragAction = (event, action) => {
    event.preventDefault();

    const dropAreaEl = mainRef.current.querySelector(".n-upload-area-drop");
    dropAreaEl.classList[action]("n-upload-area-drop--active");
  };

  const onDeleteFile = fileId => {
    const newValues = [...values];
    newValues.splice(fileId, 1);

    setValue(name, newValues, { shouldValidate: true });
  };

  return (
    <div
      className='n-upload-area-drop'
      onDrop={onDrop}
      onDragOver={event => onDragAction(event, "add")}
      onDragLeave={event => onDragAction(event, "remove")}
    >
      <span className='icon material-symbols-outlined'>upload</span>

      <span className='n-upload-area-drop__title'>{__(`forms.upload.intro`, language)}</span>

      <span className='n-upload-area-drop__browse' onClick={onClickInputFile} onKeyDown={onClickInputFile} role='button' tabIndex={0}>
        {__(`forms.upload.browse`, language)}
      </span>

      

      <input {...register(name, registerOptions)} type='file' multiple={isMulti} accept={Constants.UPLOAD.ACCEPTED_TYPES.join(",")} />
    </div>
  );
};



export default UploadAreaDrop;
