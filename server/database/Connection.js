const { mongoose } = require("mongoose");

function ConnectDB(url) {
  try {
    mongoose.set('strictQuery', true)
    mongoose.connect(url);
    console.log("Mongo DB Connection success!!");
  } catch (error) {
    console.log("Mongo DB connection Error!!");
  }
}

module.exports = ConnectDB;
