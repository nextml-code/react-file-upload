import { PENDING, UPLOADING, FAIL } from "../core/constants";

const spacing = "20px";
const borderRadius = "3px";

const rgba = (r, g, b) => (opacity = 1) => `rgba(${r}, ${g}, ${b}, ${opacity})`;
export const blue = rgba(81, 173, 237);
export const grey = rgba(83, 98, 112);
export const red = rgba(237, 81, 83);
export const green = rgba(35, 206, 107);

/**
 * Style for the form both when
 * dragging and not dragging
 */
const commonStyle = {
  display: "flex",
  flexDirection: "column",
  fontFamily: '"Open Sans", sans-serif',
  backgroundColor: blue(0.1),
  alignItems: "center",
  fontWeight: 900,
  fontSize: "18px",
  color: "#111",
};

/**
 * Style for the form when dragging
 */
const draggingStyle = {
  backgroundColor: blue(0.8),
  color: "#ffffff",
};

/**
 *
 */
export const wrapperStyle = {
  border: `1px solid ${blue()}`,
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
  borderTop: `1px solid ${blue(0.2)}`,
  fontSize: "14px",
  display: "flex",
  flexDirection: "column",
  ...((status) => {
    switch (status) {
      case UPLOADING: {
        return { backgroundColor: blue(0.1) };
      }
      case PENDING: {
        return { backgroundColor: grey(0.05), color: grey(0.4) };
      }
      case FAIL: {
        return { backgroundColor: red(0.05), color: grey() };
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
