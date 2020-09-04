import React from "react";
import FileRow from "./FileRow";
import { map } from "../core/functional";
import objectMatchFilter from "../core/objectMatch";
import { triggerOnEvent } from "../core/events";

const FileList = ({ files, fileStatusArray, onClick, dispatch }) => {
  const renderFileRow = (file) => {
    const [{ progress, status }] = fileStatusArray.filter(
      objectMatchFilter("id", file.id),
    );

    return (
      <FileRow
        progress={progress}
        status={status}
        onClick={triggerOnEvent(onClick, file.id)}
        key={file.id}
        size={file.size}
        name={file.name}
        id={file.id}
        dispatch={dispatch}
      />
    );
  };

  return <div>{map(files, renderFileRow)}</div>;
};

export default FileList;
