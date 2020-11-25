import React from "react";
import styled, { css } from "styled-components";

import {
  handleOnDragEnter,
  handleOnDragExit,
  handleOnDrop,
  handleOnChange,
  preventEventDefault,
} from "../core/events";
import { labelStyle } from "../styles/styles";

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  font-family: var(--aiwizo-application-default-font);
  background-color: var(--aiwizo-application-light-background-blue);
  align-items: center;
  font-weight: 900;
  font-size: var(--aiwizo-application-font-size-big);
  color: #111;
  border-top-right-radius: var(--aiwizo-application-border-radius-primary);
  border-top-left-radius: var(--aiwizo-application-border-radius-primary);
  cursor: pointer;

  ${(props) =>
    props.dragging &&
    css`
      background-color: var(--aiwizo-application-blue);
      color: #ffffff;
    `}

  ${(props) =>
    props.empty &&
    css`
      border-bottom-right-radius: var(
        --aiwizo-application-border-radius-primary
      );
      border-bottom-left-radius: var(
        --aiwizo-application-border-radius-primary
      );
    `}
`;

const prepareReducerEvent = (state, dispatch) => (func) => (event) => {
  return func({ state, dispatch, event });
};

const FileUploadForm = ({ state, dispatch }) => {
  const reducerEvent = prepareReducerEvent(state, dispatch);

  return (
    <Wrapper
      dragging={state.isDragging}
      empty={state.files.length === 0}
      onDragEnter={reducerEvent(handleOnDragEnter)}
      onDragExit={reducerEvent(handleOnDragExit)}
      onDragOver={preventEventDefault}
      onDrop={reducerEvent(handleOnDrop)}
    >
      <label htmlFor="file-upload" style={labelStyle}>
        {state.isDragging
          ? "Now is the time! Drop the files."
          : "Drag files here or click to upload"}
        <input
          type="file"
          onChange={reducerEvent(handleOnChange)}
          id="file-upload"
          style={{ display: "none" }}
        />
      </label>
    </Wrapper>
  );
};

export default FileUploadForm;
