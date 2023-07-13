const mongoose = require("mongoose");

const formSchema = mongoose.Schema({
  invoiceno: {
    type: Number,
  },
  payment: {
    type: String,
  },
  dispatch: {
    type: String,
  },
  terms: {
    type: String,
  },
  destination: {
    type: String,
  },
  address: {
    type: String,
  },
  gstin: {
    type: String,
  },
  charge: {
    type: Number,
  },
  products: {
    type: Array,
  },
});

module.exports = mongoose.model("form", formSchema);
