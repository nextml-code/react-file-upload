import axios from "axios";

const upload = (url, onUploadProgress, requestOptions) => (file) => {
  const data = new FormData();
  data.append("file", file);

  return axios({
    method: "post",
    url,
    data,
    onUploadProgress,
    headers: {
      "Content-Type": "multipart/form-data",
      ...requestOptions.headers,
    },
  });
};

export default upload;
