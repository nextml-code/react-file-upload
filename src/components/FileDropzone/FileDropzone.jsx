import React, { useId } from "react";
import { useState } from "../../store/ContextProvider.jsx";
import { Label } from "./Label.js";
import { Wrapper, defaultStyles } from "./Wrapper.js";
import {
  getEventFiles,
  getEventTargetFiles,
  preventDefault,
} from "./events.js";
import { appendFiles } from "../../store/appendFiles.js";
import { START_DRAG, STOP_DRAG } from "../../store/actionTypes.js";

export const FileDropzone = () => {
  const { state, dispatch } = useState();
  const id = useId();

  const borderRadius =
    "calc(var(--react-file-upload-border-radius-primary) - 1px)";

  const styles = {
    border: "none",
    borderTopRightRadius: borderRadius,
    borderTopLeftRadius: borderRadius,
    borderBottomRightRadius: state.files?.length > 0 ? 0 : borderRadius,
    borderBottomLeftRadius: state.files?.length > 0 ? 0 : borderRadius,
  };

  return (
    <Wrapper
      dragging={state.isDragging}
      onDragEnter={(_) => dispatch({ type: START_DRAG })}
      onDragExit={(_) => dispatch({ type: STOP_DRAG })}
      onDragOver={preventDefault}
      onDrop={(event) =>
        dispatch(appendFiles(getEventFiles(preventDefault(event))))
      }
      styles={{
        ...defaultStyles,
        ...styles,
      }}
    >
      <Label
        htmlFor={id}
        styles={{
          ...defaultStyles,
          ...styles,
        }}
      >
        {state.isDragging
          ? "Now is the time! Drop the files."
          : "Drop files here or click to browse"}
        <input
          type="file"
          onChange={(event) =>
            dispatch(appendFiles(getEventTargetFiles(preventDefault(event))))
          }
          id={id}
          style={{ display: "none" }}
          multiple
        />
      </Label>
    </Wrapper>
  );
};
