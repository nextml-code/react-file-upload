import React from "react";
import { fileRowStyle, grey, blue, green, red } from "../styles/styles";
import getSizeUnit from "../core/getSizeUnit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSyncAlt, faCheck } from "@fortawesome/pro-regular-svg-icons";
import { faExclamationCircle } from "@fortawesome/pro-solid-svg-icons";
import { SET_FILE_STATUS } from "../store/actionTypes";
import { PENDING, UPLOADING, FAIL, DONE } from "../core/constants";

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

const retry = (dispatch, fileId) => () => {
  dispatch({
    type: SET_FILE_STATUS,
    payload: {
      id: fileId,
      status: PENDING,
    },
  });
};

const getStatusText = (status) => {
  switch (status) {
    case UPLOADING: {
      return "Uploading file...";
    }
    case FAIL: {
      return "Failed to upload file";
    }
    default: {
      return "";
    }
  }
};

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

const FileRow = ({ name, size, status, progress, dispatch }) => (
  <div style={fileRowStyle(status)}>
    <div style={{ display: "flex", alignItems: "baseline" }}>
      <span style={{ marginRight: "7px" }}>
        {status === UPLOADING ? (
          <FontAwesomeIcon
            className="spin"
            icon={faSyncAlt}
            style={{ color: blue() }}
          />
        ) : null}
        {status === DONE ? (
          <FontAwesomeIcon icon={faCheck} style={{ color: green() }} />
        ) : null}
        {status === FAIL ? (
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
      {status === FAIL ? <a onClick={retry(dispatch)}>retry</a> : null}
      <span style={{ marginLeft: "auto" }}>{getStatusText(status)}</span>
    </div>
    <ProgressBar progress={progress} status={status} />
  </div>
);

export default FileRow;
