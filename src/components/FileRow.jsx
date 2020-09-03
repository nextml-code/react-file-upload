import React from "react";
import { fileRowStyle, grey, blue } from "../styles/styles";
import getSizeUnit from "../core/getSizeUnit";

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
  if (["pending", "uploading"].includes(status)) {
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
  console.log(status, progress);
  return (
    <div style={fileRowStyle(status)}>
      {name} {`(${getSizeUnit(size).size} ${getSizeUnit(size).short})`}
      <ProgressBar progress={progress} status={status} />
    </div>
  );
};

export default FileRow;
