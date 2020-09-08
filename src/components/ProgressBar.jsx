import React from "react";
import { PENDING, UPLOADING } from "../core/constants";

const progressbarStyle = {
  width: "100%",
  height: "3px",
  display: "flex",
  marginTop: "5px",
  borderRadius: "100px",
};
const doneStyle = (progress) => ({
  width: `${progress}%`,
  backgroundColor: "var(--aiwizo-application-blue)",
});

const leftStyle = (progress) => ({
  width: `${100 - progress}%`,
  backgroundColor: "var(--aiwizo-application-grey)",
});

const ProgressBar = ({ status, progress }) => {
  if ([PENDING, UPLOADING].includes(status)) {
    return (
      <div style={progressbarStyle}>
        <div style={doneStyle(progress)}></div>
        <div style={leftStyle(progress)}></div>
      </div>
    );
  }

  return null;
};

export default ProgressBar;
