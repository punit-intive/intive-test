const checkMaxFileSize = (fileList, maxFileSize) => {
  const files = [...fileList];
  const errorForFiles = [];

  files.forEach((file, index) => file.size > maxFileSize && errorForFiles.push(index));

  return !errorForFiles?.length || errorForFiles.join(",");
};

export default checkMaxFileSize;
