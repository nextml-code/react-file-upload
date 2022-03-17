import React from "react";
import styled from "styled-components";
import { FAIL, UPLOADING } from "../../../core/constants";

const getStatusText = (status, message) => {
  switch (status) {
    case UPLOADING: {
      return "Uploading file...";
    }
    case FAIL: {
      return message ? message : `Failed to upload file`;
    }
    default: {
      return "";
    }
  }
};

const Wrapper = styled.span`
  margin-left: var(--react-file-upload-spacing-small);
`;

const StatusText = ({ status, message }) => {
  return <Wrapper>{getStatusText(status, message)}</Wrapper>;
};

export default StatusText;
