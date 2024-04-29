import Constants from "@shared/constants";

const checkAcceptedFileTypes = fileList => {
  const files = [...fileList];
  const errorForFiles = [];

  files.forEach((file, index) => !Constants.UPLOAD.ACCEPTED_TYPES.includes(file.type) && errorForFiles.push(index));

  return !errorForFiles?.length || errorForFiles.join(",");
};

export default checkAcceptedFileTypes;
