/**
 * Dev server to upload files to
 */

const express = require("express");
const multer = require("multer");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("hello");
});

app.post("/", multer({ dest: "uploads/" }).single("file"), (req, res) => {
  res.status(200).send({ message: "done" });
});

app.listen(9000, function () {
  console.log("Upload files");
});
