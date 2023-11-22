import { divide } from "./functional.js";

const sizeStrings = [
  { short: "B", long: "byte" },
  { short: "kB", long: "kilobyte" },
  { short: "MB", long: "megabyte" },
  { short: "GB", long: "gigabyte" },
  { short: "TB", long: "terabyte" },
];

const getSizeUnit = (size, index = 0) => {
  if (Math.floor(divide(size, 1024)) === 0) {
    return { ...sizeStrings[index], size: Math.round(size) };
  }

  return getSizeUnit(divide(size, 1024), index + 1);
};

export default getSizeUnit;
