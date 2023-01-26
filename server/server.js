const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const app = express();

app.use(cors());
app.use(bodyParser.json());
dotenv.config();

const { Schema } = mongoose;

const courseShcema = new Schema({
  image: String,
  name: String,
  work: String,
  description: String,
});
const Course = mongoose.model("newcourses", courseShcema);

app.get("/newcourses", (req, res) => {
  Course.find({}, (err, docs) => {
    if (!err) {
      res.send(docs);
    } else {
      res.status(500).json({ message: err });
    }
  });
});

app.get("/newcourses/:id", (req, res) => {
  const { id } = req.params;
  Course.findById(id, (err, doc) => {
    if (!err) {
      if (doc) {
        res.send(doc);
      } else {
        res.status(404).json({ message: err });
      }
    } else {
      res.status(500).json({ message: err });
    }
  });
});

app.delete("/newcourses/:id", (req, res) => {
  const { id } = req.params;
  Course.findByIdAndDelete(id, (err) => {
    if (!err) {
      res.status(404).json({ message: "deleted" });
    } else {
      res.status(404).json({ message: err });
    }
  });
});

app.post("/newcourses", (req, res) => {
  let course = new Course({
    image: req.body.image,
    name: req.body.name,
    work: req.body.work,
    description: req.body.description,
  });
  course.save();
  res.status(200).json({ message: "added" });
});

const PORT = process.env.PORT;
const DB = process.env.DB_URL.replace("<password>", process.env.PASSWORD);

mongoose.connect(DB, (err) => {
  if (!err) {
    app.listen(PORT, () => {
      console.log(`http://localhost:${PORT}/newcourses`);
    });
  }
});
