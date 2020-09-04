import React from "react";
import { fileRowStyle, grey, blue, green, red } from "../styles/styles";
import getSizeUnit from "../core/getSizeUnit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSyncAlt, faCheck } from "@fortawesome/pro-regular-svg-icons";
import { faExclamationCircle } from "@fortawesome/pro-solid-svg-icons";

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

const getStatusText = (status) => {
  switch (status) {
    case "uploading": {
      return "Uploading file...";
    }
    case "fail": {
      return "Failed to upload file";
    }
    default: {
      return "";
    }
  }
};

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

const FileRow = ({ name, size, status, progress }) => (
  <div style={fileRowStyle(status)}>
    <div style={{ display: "flex", alignItems: "baseline" }}>
      <span style={{ marginRight: "7px" }}>
        {status === "uploading" ? (
          <FontAwesomeIcon
            className="spin"
            icon={faSyncAlt}
            style={{ color: blue() }}
          />
        ) : null}
        {status === "done" ? (
          <FontAwesomeIcon icon={faCheck} style={{ color: green() }} />
        ) : null}
        {status === "fail" ? (
          <FontAwesomeIcon
            icon={faExclamationCircle}
            style={{ color: red() }}
          />
        ) : null}
      </span>
      <span>{name}</span>
      <span
        style={{
          marginLeft: "7px",
          fontWeight: "bold",
          fontSize: "0.6rem",
          color: grey(),
        }}
      >{`${getSizeUnit(size).size} ${getSizeUnit(size).short}`}</span>
      <span style={{ marginLeft: "auto" }}>{getStatusText(status)}</span>
    </div>
    <ProgressBar progress={progress} status={status} />
  </div>
);

export default FileRow;
