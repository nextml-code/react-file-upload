import { START_DRAG, STOP_DRAG } from "../store/actionTypes";
import { map, identity } from "./functional";
import appendFiles from "../store/appendFiles";

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
  dispatch(appendFiles(files));
};

export const handleOnChange = ({ dispatch, event }) => {
  event.preventDefault();
  const { files } = event.target;
  dispatch(appendFiles(files));
};

export const preventEventDefault = (event) => event.preventDefault();

export const triggerOnEvent = (func, param) => (_) => {
  if (typeof param === "function") {
    return func(param());
  }
  return func(param);
};
