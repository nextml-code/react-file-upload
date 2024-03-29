// Make an upload request one after one
import { useEffect } from "react";

import upload from "../core/upload.js";
import { SET_FILE_STATUS, FILE_RESPONSE } from "../store/actionTypes.js";
import { divide } from "../core/functional.js";
import getFilesWithStatus from "../core/getFilesWithStatus.js";
import { UPLOADING, NEXT, FAIL } from "../core/constants.js";
import { useState } from "../store/ContextProvider.jsx";

// Start upload all files with the status 'next'
export const useFileUpload = (url, onUploadResponse, requestOptions) => {
  const {
    state: { files, fileStatusArray },
    dispatch,
  } = useState();

  const [nextFile] = getFilesWithStatus(files, fileStatusArray, NEXT);

  useEffect(() => {
    const progressHandler = (fileId) => (event) => {
      dispatch({
        type: SET_FILE_STATUS,
        payload: {
          id: fileId,
          progress: divide(event.loaded, event.total) * 100,
          status: UPLOADING,
        },
      });
    };

    const responseHandler = (file) => (response) => {
      dispatch({
        type: FILE_RESPONSE,
        payload: {
          id: file.id,
          data: response.data,
        },
      });

      onUploadResponse(response, file);
    };

    const errorHandler = (fileId) => (error) => {
      dispatch({
        type: SET_FILE_STATUS,
        payload: {
          id: fileId,
          status: FAIL,
          message: error.message,
        },
      });
      onUploadResponse(error);
    };

    if (nextFile !== undefined) {
      dispatch({
        type: SET_FILE_STATUS,
        payload: {
          id: nextFile.id,
          progress: 0,
          status: UPLOADING,
        },
      });

      upload(url, progressHandler(nextFile.id), requestOptions)(nextFile)
        .then(responseHandler(nextFile))
        .catch(errorHandler(nextFile.id));
    }
  }, [fileStatusArray]);
};
