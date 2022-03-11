import React from "react";
import getSizeUnit from "../../../core/getSizeUnit";
import ProgressBar from "../../ProgressBar";
import RetryButton from "../../RetryButton";
import StatusIcon from "../../StatusIcon";
import { triggerOnEvent } from "../../../core/events";
import objectMatchFilter from "../../../core/objectMatch";
import { filter, first } from "../../../core/functional";
import styled from "styled-components";
import Wrapper from "./Wrapper";
import StatusText from "./StatusText";

const Name = styled.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
  font-size: var(--react-file-upload-font-size-medium);
`;

const FileSize = styled.span`
  margin-left: var(--react-file-upload-spacing-small);
  font-weight: bold;
  font-size: var(--react-file-upload-font-size-small);
  color: var(--react-file-upload-grey);
`;

const FileRow = ({
  name,
  size,
  status,
  progress,
  dispatch,
  id,
  onClick,
  fileData,
  onHover,
  isHovered,
}) => (
  <Wrapper
    status={status}
    onClick={triggerOnEvent(
      onClick,
      first(filter(fileData, objectMatchFilter("localFileId", id))),
    )}
    onMouseEnter={() => onHover(id)}
    onMouseMove={() => onHover(id)}
    onMouseLeave={() => onHover(null)}
    style={{
      backgroundColor: isHovered
        ? "var(--react-file-upload-light-background-grey)"
        : "transparent",
    }}
  >
    <div
      style={{
        display: "flex",
        alignItems: "baseline",
      }}
    >
      <StatusIcon status={status} />
      <Name>{name}</Name>
      <FileSize>
        {`${getSizeUnit(size).size} ${getSizeUnit(size).short}`}
      </FileSize>

      <div style={{ marginLeft: "auto" }}>
        <StatusText status={status} />
        <RetryButton dispatch={dispatch} fileId={id} status={status} />
      </div>
    </div>
    <ProgressBar progress={progress} status={status} />
  </Wrapper>
);

export default FileRow;
