import { mustBeDefined } from "./mustBeDefined";

export const validateId = mustBeDefined(
  "You must specify the property 'id' in <FileUpload id={...}/>",
);
