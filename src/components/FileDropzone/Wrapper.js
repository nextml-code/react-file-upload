import styled, { css } from "styled-components";

export const defaultStyles = {
  fontFamily: "var(--react-file-upload-default-font)",
  fontWeight: 900,
  color: "var(--react-file-upload-black)",
  colorDragging: "var(--react-file-upload-white)",
  backgroundColor: "var(--react-file-upload-light-background-blue)",
  backgroundColorDragging: "var(--react-file-upload-blue)",
  fontSize: "var(--react-file-upload-font-size-big)",
  border: "1px solid var(--react-file-upload-primary-border-blue)",
  borderTopLeftRadius: "var(--react-file-upload-border-radius-primary)",
  borderTopRightRadius: "var(--react-file-upload-border-radius-primary)",
  borderBottomRightRadius: "var(--react-file-upload-border-radius-primary)",
  borderBottomLeftRadius: "var(--react-file-upload-border-radius-primary)",
  padding: "var(--react-file-upload-spacing-medium)",
};

export const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  font-weight: ${(props) => props.styles.fontWeight};
  color: ${(props) => props.styles.color};
  font-family: ${(props) => props.styles.fontFamily};
  background-color: ${(props) => props.styles.backgroundColor};
  font-size: ${(props) => props.styles.fontSize};
  border: ${(props) => props.styles.border};
  border-top-left-radius: ${(props) => props.styles.borderTopLeftRadius};
  border-top-right-radius: ${(props) => props.styles.borderTopRightRadius};
  border-bottom-right-radius: ${(props) =>
    props.styles.borderBottomRightRadius};
  border-bottom-left-radius: ${(props) => props.styles.borderBottomLeftRadius};
  overflow-y: scroll;

  ${(props) =>
    props.dragging &&
    css`
      color: ${(props) => props.styles.colorDragging};
      background-color: ${(props) => props.styles.backgroundColorDragging};
    `}
`;
