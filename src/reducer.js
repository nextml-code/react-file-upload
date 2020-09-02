import {
  SET_FILES,
  STOP_DRAG,
  START_DRAG,
  SET_NEXT_UPLOAD,
  SET_PROGRESS,
  UPLOAD_SUCCESS,
  UPLOAD_ERROR,
} from "./core/actionTypes";

export default (state, action) => {
  if (process.env.NODE_ENV === "development") {
    console.log(state);
    console.log(action);
  }

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

    case SET_FILES: {
      return {
        ...state,
        pendingFiles: action.payload,
        isDragging: false,
      };
    }

    case SET_NEXT_UPLOAD: {
      return {
        ...state,
        pendingFiles: state.pendingFiles.slice(1),
        uploadingFile: state.pendingFiles[0],
      };
    }

    case UPLOAD_SUCCESS: {
      return {
        ...state,
        uploadingFile: null,
        uploadedFiles: [...state.uploadedFiles, state.uploadingFile],
        progress: 0,
      };
    }

    case UPLOAD_ERROR: {
      return {
        ...state,
        uploadingFile: null,
        erroredFiles: [...state.erroredFiles, state.uploadingFile],
        progress: 0,
      };
    }

    case SET_PROGRESS: {
      return {
        ...state,
        progress: action.payload,
      };
    }

    default: {
      return state;
    }
  }
};
