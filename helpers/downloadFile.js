import getDateString from "./getDateString";

const downloadFile = fileUrl =>
  fetch(fileUrl)
    .then(response => response.blob())
    .then(blob => {
      const downloadDate = getDateString();
      const [fileName, extension] = fileUrl.slice(fileUrl.lastIndexOf("/") + 1).split(".");
      const fileNameWithDownloadDate = `${fileName}-${downloadDate}.${extension}`;

      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = fileNameWithDownloadDate;

      document.body.appendChild(a);

      a.click();

      document.body.removeChild(a);
    });

export default downloadFile;
