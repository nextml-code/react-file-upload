import { isDefined } from "../core/isDefined";

export const mustBeDefined = (message) => (x) => {
  if (!isDefined(x)) {
    throw new TypeError(message);
  }
};
