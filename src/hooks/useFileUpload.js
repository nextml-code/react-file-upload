// Make an upload request one after one
import upload from "../core/upload";
import { useEffect } from "react";
import { SET_FILE_STATUS, FILE_RESPONSE } from "../store/actionTypes";
import { divide } from "../core/functional";
import getFilesWithStatus from "../core/getFilesWithStatus";
import { UPLOADING, NEXT, FAIL } from "../core/constants";

// Start upload all files with the status 'next'
const useFileUpload = ({ files, fileStatusArray }, dispatch, url, callback) => {
  useEffect(() => {
    const [nextFile] = getFilesWithStatus(files, fileStatusArray, NEXT);

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

      callback(response, file);
    };

    const errorHandler = (fileId) => (error) => {
      dispatch({
        type: SET_FILE_STATUS,
        payload: {
          id: fileId,
          status: FAIL,
        },
      });
      callback(error);
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

      upload(url, progressHandler(nextFile.id))(nextFile)
        .then(responseHandler(nextFile))
        .catch(errorHandler(nextFile.id));
    }
  }, [fileStatusArray]);
};

export default useFileUpload;
