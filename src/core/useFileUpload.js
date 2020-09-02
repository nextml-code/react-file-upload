// Make an upload request one after one
import upload from "./upload";
import { useEffect } from "react";
import { SET_NEXT_UPLOAD, SET_PROGRESS, UPLOAD_SUCCESS } from "./actionTypes";
import { divide } from "./functional";

const useFileUpload = ({ pendingFiles, uploadingFile }, dispatch, url) => {
  useEffect(() => {
    if (pendingFiles.length > 0) {
      if (uploadingFile === null) {
        dispatch({
          type: SET_NEXT_UPLOAD,
        });
      }
    }
  }, [pendingFiles, uploadingFile]);

  useEffect(() => {
    const progressHandler = (event) => {
      dispatch({
        type: SET_PROGRESS,
        payload: divide(event.loaded, event.total) * 100,
      });
    };

    const responseHandler = (response) => {
      dispatch({
        type: UPLOAD_SUCCESS,
      });
    };

    if (uploadingFile !== null) {
      upload(url, progressHandler)(uploadingFile).then(responseHandler);
    }
  }, [uploadingFile]);
};

export default useFileUpload;
