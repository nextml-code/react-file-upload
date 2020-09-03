import { APPEND_FILES } from "./actionTypes";
import { map } from "../core/functional";
import { v4 as uuid } from "uuid";

const appendFiles = (files) => {
  return {
    type: APPEND_FILES,
    payload: map([...files], (file) => Object.assign(file, { id: uuid() })),
  };
};

export default appendFiles;
