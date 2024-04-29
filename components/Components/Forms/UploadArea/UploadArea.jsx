import "./UploadArea.scss";

import __ from "@/helpers/translate";
import Constants from "@shared/constants";
import { useRef } from "react";
import { useFormContext } from "react-hook-form";

import UploadAreaDrop from "./Components/UploadAreaDrop";
import checkAcceptedFileTypes from "./helpers/checkAcceptedFileTypes";
import checkMaxFileSize from "./helpers/checkMaxFileSize";

const UploadArea = ({ name: nameRaw, label, language, isMulti, required, maxFileSize, maxFilesNumber }) => {
  const {
    register,
    setValue,
    formState: { errors },
    watch,
    trigger
  } = useFormContext();

  const name = `${Constants.UPLOAD.FILE_INPUT_PREFIX}${nameRaw}`;
  const mainRef = useRef();
  const values = watch(name);

  const maxFileSizeB = (maxFileSize || Constants.UPLOAD.DEFAULT_MAX_FILE_SIZE) * 1000;
  const maxFileSizeMB = Math.floor(maxFileSizeB / 1000000);
  const maxFilesNumberFinal = maxFilesNumber || Constants.UPLOAD.DEFAULT_MAX_FILES_NUMBER;

  const registerOptions = {
    validate: {
      acceptedFileTypes: checkAcceptedFileTypes,
      maxFileSize: fileList => checkMaxFileSize(fileList, maxFileSizeB),
      maxFilesNumber: fileList => fileList.length <= maxFilesNumberFinal,
      ...(required && { required: fileList => !!fileList?.length })
    },
    onChange: () => trigger(name)
  };

  const shouldShowGeneralError = ["required", "maxFilesNumber"].includes(errors[name]?.type);

  const errorMessage = shouldShowGeneralError && `${label}  ${__(`forms.validation.${errors[name].type}`, language)}`;

  const infoBottom = __("forms.upload.infoBottom", language)
    .replace(Constants.TRANSLATIONS_DYNAMIC.UPLOAD_MAX_FILE_SIZE, maxFileSizeMB)
    .replace(Constants.TRANSLATIONS_DYNAMIC.UPLOAD_MAX_FILES_NUMBER, maxFilesNumberFinal);

  return (
    <div className='n-upload-area' ref={mainRef}>
      <label htmlFor={name}>{label}</label>

      <UploadAreaDrop
        name={name}
        register={register}
        registerOptions={registerOptions}
        values={values}
        setValue={setValue}
        errors={errors}
        language={language}
        mainRef={mainRef}
        isMulti={isMulti}
        maxFileSizeMB={maxFileSizeMB}
      />

      <div className='n-upload-area__info-bottom caption'>{infoBottom}</div>

      {shouldShowGeneralError && <span className='n-upload-area__error caption'>{errorMessage}</span>}
    </div>
  );
};



export default UploadArea;
