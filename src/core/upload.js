import axios from "axios";
import isDefined from "@codewell/is-defined";
import fileToBase64 from "./fileToBase64";
import base64ToFileObject from "./base64ToFileObject";

const getData = (requestOptions, file) =>
  new Promise((resolve, reject) => {
    if (isDefined(requestOptions.body)) {
      return fileToBase64(file)
        .then((base64File) => {
          resolve({
            ...requestOptions.body,
            file: {
              ...requestOptions.body.file,
              ...base64ToFileObject(base64File),
            },
          });
        })
        .catch(reject);
    }
    const data = new FormData();
    data.append("file", file);
    return resolve(data);
  });

const getHeaders = (requestOptions) => {
  if (isDefined(requestOptions.body)) {
    return {
      "Content-Type": "application/json",
      ...requestOptions.headers,
    };
  }

  return {
    "Content-Type": "multipart/form-data",
    ...requestOptions.headers,
  };
};

const upload = (url, onUploadProgress, requestOptions) => (file) =>
  getData(requestOptions, file).then((data) =>
    axios({
      method: "post",
      url,
      data,
      onUploadProgress,
      headers: getHeaders(requestOptions),
    }),
  );

export default upload;
