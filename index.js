const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require("dotenv").config();
app.use(cors());
const Form = require("./modal/form");

app.get("/", async (req, res) => {
  try {
    const result = await Form.find();
    res.json({ message: result }).status(200);
  } catch (e) {
    console.log(e);
  }
});

app.post("/create", async (req, res) => {
  try {
    const form = await Form.create({ ...req.body });
    res.json({ message: form }).status(200);
  } catch (err) {
    console.log(err);
  }
});

app.put("/update/:id", async (req, res) => {
  try {
    console.log(req, "efkmkfe");
    const { id } = req.params;
    console.log(id);
    const form = await Form.findByIdAndUpdate(id, { ...req.body });
    res.json({ message: "Updated Successfully" }).status(200);
  } catch (e) {
    console.log(e);
  }
});

app.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    // const form = await Form.findByIdAndDelete(id);
    res.json({ message: "Deleted Successfully" }).status(200);
  } catch (e) {
    console.log(e);
  }
});

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(8080, () => {
      console.log("Server started on port 8080");
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
