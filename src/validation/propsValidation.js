import { mustBeDefined } from "./mustBeDefined.js";

export const validateId = mustBeDefined(
  "You must specify the property 'id' in <FileUpload id={...}/>",
);
