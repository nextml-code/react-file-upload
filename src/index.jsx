import React, { useReducer } from "react";
import reducer from "./store/reducer";
import { wrapperStyle } from "./styles/styles";
import FileList from "./components/FileList";
import useFileUpload from "./hooks/useFileUpload";
import useFileUploadBatchControl from "./hooks/useFileUploadBatchControl";
import initialState from "./store/initialState";
import FileDropzone from "@aiwizo/react-file-dropzone";
import "@aiwizo/application-styles";
import appendFiles from "./store/appendFiles";

const FileUpload = ({
  url,
  onUploadResponse,
  onRowClick,
  requestBatchSize = 1,
  requestOptions,
}) => {
  const [state, dispatch] = useReducer(reducer, {
    ...initialState,
    requestBatchSize,
  });
  useFileUploadBatchControl(state, dispatch);
  useFileUpload(state, dispatch, url, onUploadResponse, requestOptions);

  const borderRadius =
    "calc(var(--aiwizo-application-border-radius-primary) - 1px)";

  const dropzoneStyles = {
    border: "none",
    borderTopRightRadius: borderRadius,
    borderTopLeftRadius: borderRadius,
    borderBottomRightRadius: state.files.length > 0 ? 0 : borderRadius,
    borderBottomLeftRadius: state.files.length > 0 ? 0 : borderRadius,
  };

  return (
    <div style={wrapperStyle}>
      <FileDropzone
        onChange={({ files }) => dispatch(appendFiles(files))}
        styles={dropzoneStyles}
      />
      <FileList {...state} onRowClick={onRowClick} dispatch={dispatch} />
    </div>
  );
};

export default FileUpload;
