import { v4 as uuid } from "uuid";

import { APPEND_FILES } from "./actionTypes.js";
import { map } from "../core/functional.js";

const assignId = (x) => Object.assign(x, { id: uuid() });

export const appendFiles = (files) => {
  return {
    type: APPEND_FILES,
    payload: map(assignId)([...files]),
  };
};
