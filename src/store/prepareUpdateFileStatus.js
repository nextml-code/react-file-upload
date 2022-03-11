import { map } from "../core/functional";

const prepareUpdateFileStatus = (files) => (file) =>
  map((f) => {
    if (file.id === f.id) {
      return { ...f, ...file };
    }
    return f;
  })(files);

export default prepareUpdateFileStatus;
