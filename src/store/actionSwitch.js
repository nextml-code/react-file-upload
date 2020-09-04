import {
  STOP_DRAG,
  START_DRAG,
  SET_NEXT_UPLOAD,
  SET_FILE_STATUS,
  APPEND_FILES,
} from "./actionTypes";
import prepareUpdateFileStatus from "./prepareUpdateFileStatus";
import { map } from "../core/functional";
import { PENDING, NEXT } from "../core/constants";

const actionSwitch = (state, action) => {
  const updateFileStatus = prepareUpdateFileStatus(state.fileStatusArray);
  switch (action.type) {
    case START_DRAG: {
      return {
        ...state,
        isDragging: true,
      };
    }

    case STOP_DRAG: {
      return {
        ...state,
        isDragging: false,
      };
    }

    case APPEND_FILES: {
      return {
        ...state,
        files: [...state.files, ...action.payload],
        fileStatusArray: [
          ...state.fileStatusArray,
          ...map(action.payload, (file) => ({
            id: file.id,
            status: PENDING,
            progress: 0,
          })),
        ],
        isDragging: false,
      };
    }

    case SET_NEXT_UPLOAD: {
      return {
        ...state,
        fileStatusArray: updateFileStatus({
          // Set the first pending file to the next file to be uploaded
          ...state.fileStatusArray.filter((f) => f.status === PENDING)[0],
          status: NEXT,
        }),
      };
    }

    case SET_FILE_STATUS: {
      return {
        ...state,
        fileStatusArray: updateFileStatus(action.payload),
      };
    }

    default: {
      return state;
    }
  }
};

export default actionSwitch;
