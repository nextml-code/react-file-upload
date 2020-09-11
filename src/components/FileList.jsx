import React from "react";
import FileRow from "./FileRow";
import { map } from "../core/functional";
import objectMatchFilter from "../core/objectMatch";

const FileList = ({
  files,
  fileStatusArray,
  fileData,
  onRowClick,
  dispatch,
}) => {
  const renderFileRow = (file) => {
    const [{ progress, status }] = fileStatusArray.filter(
      objectMatchFilter("id", file.id),
    );

    return (
      <FileRow
        progress={progress}
        status={status}
        onClick={onRowClick}
        key={file.id}
        size={file.size}
        name={file.name}
        id={file.id}
        fileData={fileData}
        dispatch={dispatch}
      />
    );
  };

  return <div>{map(files, renderFileRow)}</div>;
};

export default FileList;
