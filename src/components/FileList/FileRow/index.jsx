import React from "react";
import styled from "styled-components";

import getSizeUnit from "../../../core/getSizeUnit.js";
import ProgressBar from "../../ProgressBar/ProgressBar.jsx";
import RetryButton from "../../RetryButton.jsx";
import StatusIcon from "../../StatusIcon.jsx";
import { triggerOnEvent } from "../../../core/events.js";
import objectMatchFilter from "../../../core/objectMatch.js";
import { filter, first } from "../../../core/functional.js";
import Wrapper from "./Wrapper.js";
import StatusText from "./StatusText.jsx";

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
  message,
}) => (
  <Wrapper
    status={status}
    onClick={triggerOnEvent(
      onClick,
      first(filter(fileData, objectMatchFilter("localFileId", id))),
    )}
  >
    <div
      style={{
        display: "flex",
        alignItems: "baseline",
      }}
    >
      <StatusIcon status={status} />
      <Name>{name}</Name>

      <div style={{ marginLeft: "auto" }}>
        <StatusText status={status} message={message} />
        <RetryButton dispatch={dispatch} fileId={id} status={status} />
      </div>
      <FileSize>
        {`${getSizeUnit(size).size} ${getSizeUnit(size).short}`}
      </FileSize>
    </div>
    <ProgressBar progress={progress} status={status} />
  </Wrapper>
);

export default FileRow;
