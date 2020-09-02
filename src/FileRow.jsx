import React from "react";
import { fileRowStyle, grey } from "./core/styles";
import getSizeUnit from "./core/getSizeUnit";
import { blue } from "./core/styles";

const progressbarStyle = {
  width: "100%",
  height: "3px",
  display: "flex",
  marginTop: "5px",
  borderRadius: "100px",
};
const doneStyle = (progress) => ({
  width: `${progress}%`,
  backgroundColor: blue(),
});

const leftStyle = (progress) => ({
  width: `${100 - progress}%`,
  backgroundColor: grey(),
});

const ProgressBar = ({ status, progress }) => {
  if (status === "uploading") {
    return (
      <div style={progressbarStyle}>
        <div style={doneStyle(progress)}></div>
        <div style={leftStyle(progress)}></div>
      </div>
    );
  }

  return null;
};

const FileRow = ({ name, size, status, progress }) => {
  return (
    <div style={fileRowStyle(status)}>
      {name} {`(${getSizeUnit(size).size} ${getSizeUnit(size).short})`}
      <ProgressBar progress={progress} status={status} />
    </div>
  );
};

export default FileRow;
