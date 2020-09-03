import React, { useReducer } from "react";
import "./styles/index.css";
import reducer from "./store/reducer";
import { wrapperStyle } from "./styles/styles";
import FileList from "./components/FileList";
import useFileUpload from "./hooks/useFileUpload";
import useFileUploadBatchControl from "./hooks/useFileUploadBatchControl";
import FileUploadForm from "./components/FileUploadForm";

const initialState = {
  files: [],
  fileStatusArray: [],
  requestBatchSize: 2,
};

const FileUpload = ({ url }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useFileUploadBatchControl(state, dispatch);
  useFileUpload(state, dispatch, url);

  return (
    <div style={wrapperStyle}>
      <FileUploadForm state={state} dispatch={dispatch} />
      <FileList {...state} onClick={() => {}} />
    </div>
  );
};

export default FileUpload;
