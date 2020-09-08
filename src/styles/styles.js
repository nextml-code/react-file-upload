import { PENDING, UPLOADING, FAIL } from "../core/constants";

const spacing = "20px";
const borderRadius = "3px";

/**
 * Style for the form both when
 * dragging and not dragging
 */
const commonStyle = {
  display: "flex",
  flexDirection: "column",
  fontFamily: "var(--aiwizo-application-default-font)",
  backgroundColor: "var(--aiwizo-application-light-background-blue)",
  alignItems: "center",
  fontWeight: 900,
  fontSize: "18px",
  color: "#111",
};

/**
 * Style for the form when dragging
 */
const draggingStyle = {
  backgroundColor: "var(--aiwizo-application-blue)",
  color: "#ffffff",
};

/**
 *
 */
export const wrapperStyle = {
  border: "1px solid var(--aiwizo-application-primary-border-blue)",
  borderRadius,
  backgroundColor: "#ffffff",
};

export const buttonStyle = {
  borderRadius: "3px",
  backgroundColor: "rgb(81, 173, 237)",
  color: "#ffffff",
  cursor: "pointer",
  boxSizing: "border-box",
  padding: "5px 7px",
  marginTop: "10px",
};

export const labelStyle = {
  width: "100%",
  padding: spacing,
  textAlign: "center",
};

export const fileRowStyle = (status) => ({
  padding: "10px 20px",
  fontFamily: '"Open Sans", sans-serif',
  borderTop: "1px solid var(--aiwizo-application-secondary-border-blue)",
  fontSize: "14px",
  display: "flex",
  flexDirection: "column",
  ...((status) => {
    switch (status) {
      case UPLOADING: {
        return {
          backgroundColor: "var(--aiwizo-application-light-background-blue)",
        };
      }
      case PENDING: {
        return {
          backgroundColor: "var(--aiwizo-application-light-background-grey)",
          color: "var(--aiwizo-application-faded-text-grey)",
        };
      }
      case FAIL: {
        return {
          backgroundColor: "var(--aiwizo-application-light-background-red)",
          color: "var(--aiwizo-application-grey)",
        };
      }
      default: {
        return { backgroundColor: "#ffffff" };
      }
    }
  })(status),
});

const getFormStyle = ({ isDragging }) => {
  if (isDragging) {
    return { ...commonStyle, ...draggingStyle };
  }
  return commonStyle;
};

export default getFormStyle;
