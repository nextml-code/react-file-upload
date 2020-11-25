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
  fontSize: "var(--aiwizo-application-font-size-big)",
  color: "#111",
  borderTopRightRadius: "var(--aiwizo-application-border-radius-primary)",
  borderTopLeftRadius: "var(--aiwizo-application-border-radius-primary)",
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
  borderRadius: "var(--aiwizo-application-border-radius-primary)",
  backgroundColor: "#ffffff",
};

export const buttonStyle = {
  borderRadius: "var(--aiwizo-application-border-radius-primary)",
  backgroundColor: "rgb(81, 173, 237)",
  color: "#ffffff",
  cursor: "pointer",
  boxSizing: "border-box",
  padding:
    "var(--aiwizo-application-spacing-mini) var(--aiwizo-application-spacing-small)",
  marginTop: "var(--aiwizo-application-spacing-small)",
};

export const labelStyle = {
  width: "100%",
  padding: "var(--aiwizo-application-spacing-medium)",
  textAlign: "center",
};
