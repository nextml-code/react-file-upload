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

app.post(
  "/:delay/:status",
  multer({ dest: "uploads/" }).single("file"),
  (req, res) => {
    const { delay, status } = req.params;

    setTimeout(() => {
      res.status(status).send({ message: "done" });
    }, delay);
  },
);

app.listen(9000, function () {
  console.log("Upload files");
});
