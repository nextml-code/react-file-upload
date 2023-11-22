import { useEffect } from "react";

import { SET_NEXT_UPLOAD } from "../store/actionTypes.js";
import objectMatchFilter from "../core/objectMatch.js";
import { PENDING, UPLOADING, NEXT } from "../core/constants.js";
import { useState } from "../store/ContextProvider.jsx";

// Controls that the number of files uploading
// are not more than the batch size
export const useFileUploadBatchControl = () => {
  const {
    state: { fileStatusArray, requestBatchSize },
    dispatch,
  } = useState();

  useEffect(() => {
    const numberOfUploadingFiles = fileStatusArray.filter(
      objectMatchFilter("status", UPLOADING),
    ).length;

    const numberOfReadyFiles = fileStatusArray.filter(
      objectMatchFilter("status", NEXT),
    ).length;

    if (
      fileStatusArray.filter(objectMatchFilter("status", PENDING)).length > 0 &&
      numberOfUploadingFiles + numberOfReadyFiles < requestBatchSize
    ) {
      dispatch({
        type: SET_NEXT_UPLOAD,
      });
    }
  }, [fileStatusArray]);
};
