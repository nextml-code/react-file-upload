import { map } from "../core/functional";

const prepareUpdateFileStatus = (files) => (file) =>
  map(files, (f) => {
    if (file.id === f.id) {
      return file;
    }
    return f;
  });

export default prepareUpdateFileStatus;
