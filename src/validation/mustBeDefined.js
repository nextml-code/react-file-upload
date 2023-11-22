import { isDefined } from "../core/isDefined.js";

export const mustBeDefined = (message) => (x) => {
  if (!isDefined(x)) {
    throw new TypeError(message);
  }
};
