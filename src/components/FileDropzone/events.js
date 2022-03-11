import { identity, map } from "../../core/functional";

export const getEventFiles = ({ dataTransfer }) => {
  if (dataTransfer.items) {
    return map((file) => {
      if (file.kind === "file") {
        return file.getAsFile();
      }
    })([...dataTransfer.items]);
  } else {
    return map(identity)([...dataTransfer.files]);
  }
};

export const getEventTargetFiles = (event) => {
  const {
    target: { files },
  } = event;

  return files;
};

export const preventDefault = (event) => {
  event.preventDefault();
  return event;
};
