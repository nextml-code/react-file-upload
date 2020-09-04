import React from "react";

import FileUpload from "../";

export default {
  title: "File upload",
  component: FileUpload,
};

const Template = (args) => <FileUpload {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  url: "http://localhost:9000?delay=1000&status=200",
  callback: (fileUploadResponse) => {
    console.log(fileUploadResponse);
  },
  requestBatchSize: 3,
};
