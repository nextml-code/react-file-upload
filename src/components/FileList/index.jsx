import React from "react";

import FileRow from "./FileRow/index.jsx";
import { map } from "../../core/functional.js";
import objectMatchFilter from "../../core/objectMatch.js";
import { useState } from "../../store/ContextProvider.jsx";

export const FileList = ({ onRowClick }) => {
  const {
    state: { files, fileStatusArray, fileData },
    dispatch,
  } = useState();

  const renderFileRow = (file) => {
    const [{ progress, status, message }] = fileStatusArray.filter(
      objectMatchFilter("id", file.id),
    );

    return (
      <FileRow
        progress={progress}
        status={status}
        message={message}
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

  return <div>{map(renderFileRow)(files)}</div>;
};
