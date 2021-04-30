import React from "react";

import FileUpload from "../";

export default {
  title: "File upload",
  component: FileUpload,
};

const Template = (args) => <FileUpload {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  url: "http://localhost:8080/files",
  onUploadResponse: (fileUploadResponse, fileData) => {
    console.log(fileUploadResponse);
    console.log(fileData);
  },
  requestBatchSize: 3,
  onRowClick: (fileData) => {
    console.log(fileData);
  },
  requestOptions: { headers: { authorization: "Bearer sometoken" } },
};
