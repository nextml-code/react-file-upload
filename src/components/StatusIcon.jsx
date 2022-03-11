import React from "react";
import { UPLOADING, DONE, FAIL } from "../core/constants";
import {
  faExclamationCircle,
  faCheck,
  faSyncAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const iconSwitch = (status) => {
  switch (status) {
    case UPLOADING: {
      return (
        <FontAwesomeIcon
          icon={faSyncAlt}
          style={{
            color: "var(--react-file-upload-blue)",
            animation: "rotate 1s ease-in-out infinite",
          }}
        />
      );
    }

    case DONE: {
      return (
        <FontAwesomeIcon
          icon={faCheck}
          style={{ color: "var(--react-file-upload-green)" }}
        />
      );
    }

    case FAIL: {
      return (
        <FontAwesomeIcon
          icon={faExclamationCircle}
          style={{ color: "var(--react-file-upload-red)" }}
        />
      );
    }

    default: {
      return null;
    }
  }
};

const StatusIcon = ({ status }) => (
  <span style={{ marginRight: "7px" }}>{iconSwitch(status)}</span>
);

export default StatusIcon;
