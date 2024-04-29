import axios from "axios";

import Constants from "../constants";

const prepareHubspotUpload = (base64Data, formId, fieldName, fileName) => {
  const config = {
    method: "post",
    maxBodyLength: Infinity,
    url: Constants.API.UPLOAD,
    data: {
      file: base64Data,
      formId,
      fieldName,
      fileName
    }
  };

  return axios
    .request(config)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      return error;
    });
};

export default prepareHubspotUpload;
