import React from "react";
import { ContextProvider } from "./store/ContextProvider";
import { isDefined } from "./core/isDefined";
import { wrapperStyle } from "./styles/styles";
import { initialState } from "./store/initialState";
import { useFileUploadBatchControl } from "./hooks/useFileUploadBatchControl";
import { useFileUpload } from "./hooks/useFileUpload";
import FileDropzone from "./components/FileDropzone/FileDropzone.jsx";
import { FileList } from "./components/FileList";
import "./styles/index.css";
import { validateId } from "./validation/propsValidation";

const validateRequestOptions = (requestOptions) => {
  if (isDefined(requestOptions.body) && isDefined(requestOptions.form)) {
    throw new Error(
      "Specifying both requestOptions.body and requestOptions.form is a contradiction.",
    );
  }
  if (isDefined(requestOptions.form)) {
    if (Array.isArray(requestOptions.form)) {
      throw new Error("requestOptions.form is an array.");
    }
    if (typeof requestOptions.form !== "object") {
      throw new Error("requestOptions.form is not an object.");
    }
    Object.keys(requestOptions.form).forEach((key) => {
      if (typeof requestOptions.form[key] === "object") {
        throw new Error(
          `requestOptions.form[${key}]: Nested form not supported yet.`,
        );
      }
    });
  }
};

const Root = ({
  url,
  onUploadResponse,
  onRowClick,
  requestOptions = {},
  id,
}) => {
  validateId(id);
  validateRequestOptions(requestOptions);
  useFileUploadBatchControl();
  useFileUpload(url, onUploadResponse, requestOptions);

  return (
    <div style={wrapperStyle}>
      <FileDropzone />
      <FileList onRowClick={onRowClick} />
    </div>
  );
};

export const FileUpload = ({ requestBatchSize = 1, loglevel, ...props }) => {
  return (
    <ContextProvider
      loglevel={loglevel}
      initialState={{ ...initialState, requestBatchSize }}
    >
      <Root {...props} />
    </ContextProvider>
  );
};
