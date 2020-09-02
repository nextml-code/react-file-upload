import React, { useReducer } from "react";
import "./index.css";
import reducer from "./reducer";
import {
  handleOnDragEnter,
  handleOnDragExit,
  handleOnDrop,
  handleOnChange,
  preventEventDefault,
} from "./core/events";
import getFormStyle, { wrapperStyle, labelStyle } from "./core/styles";
import FileList from "./FileList";
import useFileUpload from "./core/useFileUpload";

const initialState = {
  pendingFiles: [],
  uploadingFile: null,
  uploadedFiles: [],
  erroredFiles: [],
  progress: null,
};

const prepareReducerEvent = (state, dispatch) => (func) => (event) => {
  return func({ state, dispatch, event });
};

const FileUpload = ({ url, callback }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useFileUpload(state, dispatch, url);
  // use file animation??

  const reducerEvent = prepareReducerEvent(state, dispatch);

  return (
    <div style={wrapperStyle}>
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
      <FileList {...state} onClick={() => {}} />
    </div>
  );
};

export default FileUpload;
