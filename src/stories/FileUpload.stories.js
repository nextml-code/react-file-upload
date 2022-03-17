import React from "react";
import { FileUpload } from "../";

export default {
  title: "File upload",
  component: FileUpload,
};

const Template = (args) => <FileUpload {...args} />;

const commonArgs = {
  id: "94ed0384-a24b-4d0f-9a77-330b54622b85",
  url: "http://localhost:8080",
  onUploadResponse: (fileUploadResponse, fileData) => {
    console.log(fileUploadResponse, fileData);
  },
  requestBatchSize: 3,
  onRowClick: (fileData) => {
    console.log(fileData);
  },
  loglevel: "DEBUG",
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
