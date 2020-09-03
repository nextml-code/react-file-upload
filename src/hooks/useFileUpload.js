// Make an upload request one after one
import upload from "../core/upload";
import { useEffect } from "react";
import { SET_FILE_STATUS } from "../store/actionTypes";
import { divide } from "../core/functional";
import getFilesWithStatus from "../core/getFilesWithStatus";

// Start upload all files with the status 'next'
const useFileUpload = ({ files, fileStatusArray }, dispatch, url) => {
  useEffect(() => {
    const [nextFile] = getFilesWithStatus(files, fileStatusArray, "next");

    const progressHandler = (fileId) => (event) => {
      dispatch({
        type: SET_FILE_STATUS,
        payload: {
          id: fileId,
          progress: divide(event.loaded, event.total) * 100,
          status: "uploading",
        },
      });
    };

    const responseHandler = (fileId) => (response) => {
      dispatch({
        type: SET_FILE_STATUS,
        payload: {
          id: fileId,
          progress: 100,
          status: "done",
        },
      });
    };

    if (nextFile !== undefined) {
      dispatch({
        type: SET_FILE_STATUS,
        payload: {
          id: nextFile.id,
          progress: 0,
          status: "uploading",
        },
      });

      upload(
        url,
        progressHandler(nextFile.id),
      )(nextFile).then(responseHandler(nextFile.id));
    }
  }, [fileStatusArray]);
};

export default useFileUpload;
