import React, { useReducer } from "react";
import reducer from "./store/reducer";
import { wrapperStyle } from "./styles/styles";
import FileList from "./components/FileList";
import useFileUpload from "./hooks/useFileUpload";
import useFileUploadBatchControl from "./hooks/useFileUploadBatchControl";
import FileUploadForm from "./components/FileUploadForm";
import initialState from "./store/initialState";

const FileUpload = ({ url, callback, requestBatchSize = 1 }) => {
  const [state, dispatch] = useReducer(reducer, {
    ...initialState,
    requestBatchSize,
  });
  useFileUploadBatchControl(state, dispatch);
  useFileUpload(state, dispatch, url, callback);

  return (
    <div style={wrapperStyle}>
      <FileUploadForm state={state} dispatch={dispatch} />
      <FileList {...state} onClick={callback} dispatch={dispatch} />
    </div>
  );
};

export default FileUpload;
