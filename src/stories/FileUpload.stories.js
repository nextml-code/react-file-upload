import React from "react";

import FileUpload from "../";

export default {
  title: "File upload",
  component: FileUpload,
};

const Template = (args) => <FileUpload {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  url: "http://localhost:9000/3000/500",
  callback: () => {
    console.log("outermost callback");
  },
};
