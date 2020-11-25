import React from "react";
import styled from "styled-components";
import { FAIL, UPLOADING } from "../../core/constants";

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

const Wrapper = styled.span`
  margin-left: var(--aiwizo-application-spacing-small);
`;

const StatusText = ({ status }) => {
  return <Wrapper>{getStatusText(status)}</Wrapper>;
};

export default StatusText;
