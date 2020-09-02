import { START_DRAG, STOP_DRAG, SET_FILES } from "./actionTypes";
import { map, identity } from "./functional";

export const handleOnDragEnter = ({ dispatch }) => {
  dispatch({ type: START_DRAG });
};

export const handleOnDragExit = ({ dispatch }) => {
  dispatch({ type: STOP_DRAG });
};

const getFileList = (dataTransfer) => {
  if (dataTransfer.items) {
    return map([...dataTransfer.items], (file) => {
      if (file.kind === "file") {
        return file.getAsFile();
      }
    });
  } else {
    return map([...dataTransfer.files], identity);
  }
};

export const handleOnDrop = ({ event, dispatch }) => {
  event.preventDefault();

  const files = getFileList(event.dataTransfer);

  dispatch({
    type: SET_FILES,
    payload: files,
  });
};

export const handleOnChange = ({ dispatch, event }) => {
  event.preventDefault();
  console.log("CHANGE!");
};

export const preventEventDefault = (event) => {
  return event.preventDefault();
};
