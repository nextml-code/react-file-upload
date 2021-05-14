import React from "react";

import "@aiwizo/application-styles";
import FileUpload from "../";

export default {
  title: "File upload",
  component: FileUpload,
};

const Template = (args) => <FileUpload {...args} />;

const commonArgs = {
  url: "http://localhost:8000/v1/models",
  onUploadResponse: (fileUploadResponse, fileData) => {
    console.log(fileUploadResponse, fileData);
  },
  requestBatchSize: 3,
  onRowClick: (fileData) => {
    console.log(fileData);
  },
  loglevel: "",
};

export const RequestOptionsEmpty = Template.bind({});
RequestOptionsEmpty.args = {
  ...commonArgs,
};

export const RequestOptionsBody = Template.bind({});
RequestOptionsBody.args = {
  ...commonArgs,
  requestOptions: {
    headers: { authorization: "Bearer sometoken" },
    body: {
      client: {
        name: "localhost",
        version: "v0.0.1",
      },
    },
  },
};

export const RequestOptionsForm = Template.bind({});
RequestOptionsForm.args = {
  ...commonArgs,
  requestOptions: {
    headers: { authorization: "Bearer sometoken" },
    body: {
      client: {
        name: "localhost",
        version: "v0.0.1",
      },
    },
  },
};
