const mongoose = require("mongoose");
const db = require("../models");


mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/googlebooks"
);

const savedbook = {
    authors: ["Ayn Rand"],
    title: "Atlas Shrugged",
}

db.Book
  .remove({})
  .then(() => db.Book.collection.insertMany(savedbook))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });