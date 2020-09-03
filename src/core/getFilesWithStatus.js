const { default: objectMatchFilter } = require("./objectMatch");

const getFilesWithStatus = (files, fileStatusArray, status) => {
  const fileIds = fileStatusArray
    .filter(objectMatchFilter("status", status))
    .map((f) => f.id);

  return files.filter((f) => fileIds.includes(f.id));
};

export default getFilesWithStatus;
