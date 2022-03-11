import React from "react";
import FileRow from "./FileRow";
import { map } from "../../core/functional";
import objectMatchFilter from "../../core/objectMatch";
import { useState } from "../../store/ContextProvider";
import { SET_HOVERED_ROW } from "../../store/actionTypes";

export const FileList = ({ onRowClick }) => {
  const {
    state: { files, fileStatusArray, fileData, hoveredRow },
    dispatch,
  } = useState();

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
        onHover={(id) => dispatch({ type: SET_HOVERED_ROW, payload: id })}
        isHovered={file.id === hoveredRow}
      />
    );
  };

  return <div>{map(renderFileRow)(files)}</div>;
};
