const base64ToFileObject = (base64String) => {
  const [metadata, base64] = base64String.split(",");
  const [format] = metadata.split(":")[1].split(";");

  return { data: base64, format };
};

export default base64ToFileObject;
