import React from "react";
import FileRow from "./FileRow";
import { map } from "../core/functional";
import objectMatchFilter from "../core/objectMatch";

const FileList = ({ files, fileStatusArray, onClick }) => {
  const renderFileRow = (file) => {
    const [{ progress, status }] = fileStatusArray.filter(
      objectMatchFilter("id", file.id),
    );

    return (
      <FileRow
        progress={progress}
        status={status}
        onClick={onClick}
        key={file.id}
        size={file.size}
        name={file.name}
      />
    );
  };

  return <div>{map(files, renderFileRow)}</div>;
};

export default FileList;
