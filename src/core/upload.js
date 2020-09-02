import axios from "axios";

const upload = (url, onUploadProgress) => (file) => {
  const data = new FormData();
  data.append("file", file);

  return axios({
    method: "post",
    url,
    data,
    onUploadProgress,
    headers: { "Content-Type": "multipart/form-data" },
  });
};

export default upload;
