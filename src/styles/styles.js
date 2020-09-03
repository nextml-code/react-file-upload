const spacing = "20px";
const borderRadius = "3px";
export const blue = (opacity = 1) => `rgba(81, 173, 237, ${opacity})`;
export const grey = (opacity = 1) => `rgba(83, 98, 112, ${opacity})`;

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
      case "uploading": {
        return { backgroundColor: blue(0.1) };
      }
      case "pending": {
        return { backgroundColor: grey(0.05), color: grey(0.4) };
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
