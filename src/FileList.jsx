import React from "react";
import FileRow from "./FileRow";
import { map } from "./core/functional";

const FileList = ({
  pendingFiles,
  erroredFiles,
  uploadedFiles,
  uploadingFile,
  progress,
  onClick,
}) => {
  console.log(uploadingFile);
  const renderFileRow = (status) => (file, index) => (
    <FileRow
      progress={progress}
      onClick={onClick}
      key={`file::${index}`}
      name={file.name}
      size={file.size}
      status={status}
    />
  );

  return (
    <div>
      {map(uploadedFiles, renderFileRow("uploaded"))}
      {uploadingFile !== null
        ? renderFileRow("uploading")(uploadingFile, "uploading")
        : null}
      {map(pendingFiles, renderFileRow("pending"))}
      {map(erroredFiles, renderFileRow("fail"))}
    </div>
  );
};

export default FileList;
