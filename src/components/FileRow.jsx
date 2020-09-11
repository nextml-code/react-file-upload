import React from "react";
import { fileRowStyle } from "../styles/styles";
import getSizeUnit from "../core/getSizeUnit";
import { UPLOADING, FAIL } from "../core/constants";
import ProgressBar from "./ProgressBar";
import RetryButton from "./RetryButton";
import StatusIcon from "./StatusIcon";
import { triggerOnEvent } from "../core/events";
import objectMatchFilter from "../core/objectMatch";
import { filter, first } from "../core/functional";

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

const FileRow = ({
  name,
  size,
  status,
  progress,
  dispatch,
  id,
  onClick,
  fileData,
}) => (
  <div
    style={fileRowStyle(status)}
    onClick={triggerOnEvent(
      onClick,
      first(filter(fileData, objectMatchFilter("localFileId", id))),
    )}
  >
    <div style={{ display: "flex", alignItems: "baseline" }}>
      <StatusIcon status={status} />
      <span>{name}</span>
      <span
        style={{
          marginLeft: "7px",
          fontWeight: "bold",
          fontSize: "0.6rem",
          color: "var(--aiwizo-application-grey)",
        }}
      >{`${getSizeUnit(size).size} ${getSizeUnit(size).short}`}</span>

      <div style={{ marginLeft: "auto" }}>
        <span>{getStatusText(status)}</span>
        <RetryButton dispatch={dispatch} fileId={id} status={status} />
      </div>
    </div>
    <ProgressBar progress={progress} status={status} />
  </div>
);

export default FileRow;
