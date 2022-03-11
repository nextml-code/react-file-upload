export const isDefined = (...xs) => {
  if (xs.length === 0) {
    throw new TypeError("More arguments needed");
  } else {
    return !xs.map((x) => [undefined, null, NaN].includes(x)).includes(true);
  }
};
