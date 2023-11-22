import React from "react";
import { FAIL, PENDING } from "../core/constants.js";
import { SET_FILE_STATUS } from "../store/actionTypes.js";

const retry = (dispatch, fileId) => (_) => {
  dispatch({
    type: SET_FILE_STATUS,
    payload: {
      id: fileId,
      status: PENDING,
    },
  });
};

const buttonStyle = {
  color: "var(--react-file-upload-blue)",
  cursor: "pointer",
  textDecoration: "underline",
  marginLeft: "7px",
  border: "none",
  backgroundColor: "transparent",
  fontSize: "14px",
};

const RetryButton = ({ status, fileId, dispatch }) => {
  if (status === FAIL) {
    return (
      <button onClick={retry(dispatch, fileId)} style={buttonStyle}>
        Retry
      </button>
    );
  }

  return null;
};

export default RetryButton;
