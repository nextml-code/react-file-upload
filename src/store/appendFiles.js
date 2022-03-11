import { APPEND_FILES } from "./actionTypes";
import { map } from "../core/functional";
import { v4 as uuid } from "uuid";

const assignId = (x) => Object.assign(x, { id: uuid() });

export const appendFiles = (files) => {
  return {
    type: APPEND_FILES,
    payload: map(assignId)([...files]),
  };
};
