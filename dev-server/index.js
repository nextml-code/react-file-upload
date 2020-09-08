/**
 * Dev server to upload files to
 */

const express = require("express");
const multer = require("multer");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();

app.use(cors());

const fileUploadMiddleware = multer({ dest: "uploads/" }).single("file");

const fileUploadResponse = (effect) => (req, res) => {
  const { file } = req;

  fs.unlinkSync(path.resolve(__dirname, file.path));

  effect(req, res);
};

const delayStatusResponse = (req, res) => {
  const { delay, status } = req.query;
  setTimeout(() => {
    res.status(status).send({ message: "done" });
  }, delay);
};

const getRandomStatus = () => {
  const statuses = [200, 200, 500, 200, 500, 200];
  const randInt = Math.floor(Math.random() * Math.floor(statuses.length));
  return statuses[randInt];
};

const getRandomDelay = () => Math.floor(Math.random() * Math.floor(6)) * 1000;

const randomizeResponse = (_, res) => {
  setTimeout(() => {
    res.status(getRandomStatus()).send({ message: "done" });
  }, getRandomDelay());
};

app.get("/", (req, res) => {
  res.send("hello");
});

app.post("/", fileUploadMiddleware, fileUploadResponse(delayStatusResponse));

app.post(
  "/random",
  fileUploadMiddleware,
  fileUploadResponse(randomizeResponse),
);

app.listen(9000, function () {
  console.log("Upload files");
});
