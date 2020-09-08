import React from "react";

import {
  handleOnDragEnter,
  handleOnDragExit,
  handleOnDrop,
  handleOnChange,
  preventEventDefault,
} from "../core/events";
import getFormStyle, { labelStyle } from "../styles/styles";

const prepareReducerEvent = (state, dispatch) => (func) => (event) => {
  return func({ state, dispatch, event });
};

const FileUploadForm = ({ state, dispatch }) => {
  const reducerEvent = prepareReducerEvent(state, dispatch);

  return (
    <form
      style={getFormStyle(state)}
      onDragEnter={reducerEvent(handleOnDragEnter)}
      onDragExit={reducerEvent(handleOnDragExit)}
      onDragOver={preventEventDefault}
      onDrop={reducerEvent(handleOnDrop)}
    >
      <label htmlFor="file-upload" style={labelStyle}>
        {state.isDragging
          ? "Now is the time! Drop the files."
          : "Drag files here or click to select"}
        <input
          type="file"
          onChange={reducerEvent(handleOnChange)}
          id="file-upload"
          style={{ display: "none" }}
        />
      </label>
    </form>
  );
};

export default FileUploadForm;
