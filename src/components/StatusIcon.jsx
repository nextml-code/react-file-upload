import React from "react";
import { UPLOADING, DONE, FAIL } from "../core/constants";
import { blue, green, red } from "../styles/styles";
import { faExclamationCircle } from "@fortawesome/pro-solid-svg-icons";
import { faCheck, faSyncAlt } from "@fortawesome/pro-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const iconSwitch = (status) => {
  switch (status) {
    case UPLOADING: {
      return (
        <FontAwesomeIcon
          className="spin"
          icon={faSyncAlt}
          style={{ color: blue() }}
        />
      );
    }

    case DONE: {
      return <FontAwesomeIcon icon={faCheck} style={{ color: green() }} />;
    }

    case FAIL: {
      return (
        <FontAwesomeIcon icon={faExclamationCircle} style={{ color: red() }} />
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
