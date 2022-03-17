import React from "react";
import { useState } from "../../store/ContextProvider";
import { Label } from "./Label";
import { Wrapper, defaultStyles } from "./Wrapper";
import { getEventFiles, getEventTargetFiles, preventDefault } from "./events";
import { appendFiles } from "../../store/appendFiles";
import { START_DRAG, STOP_DRAG } from "../../store/actionTypes";

export const FileDropzone = ({ id }) => {
  const { state, dispatch } = useState();

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
