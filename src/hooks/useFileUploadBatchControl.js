import { useEffect } from "react";
import { SET_NEXT_UPLOAD } from "../store/actionTypes";
import objectMatchFilter from "../core/objectMatch";

// Controls that the number of files uploading
// are not more than the batch size
const useFileUploadBatchControl = (
  { fileStatusArray, requestBatchSize },
  dispatch,
) => {
  useEffect(() => {
    const numberOfUploadingFiles = fileStatusArray.filter(
      objectMatchFilter("status", "uploading"),
    ).length;

    const numberOfReadyFiles = fileStatusArray.filter(
      objectMatchFilter("status", "next"),
    ).length;

    if (
      fileStatusArray.filter(objectMatchFilter("status", "pending")).length >
        0 &&
      numberOfUploadingFiles + numberOfReadyFiles < requestBatchSize
    ) {
      dispatch({
        type: SET_NEXT_UPLOAD,
      });
    }
  }, [fileStatusArray]);
};

export default useFileUploadBatchControl;
