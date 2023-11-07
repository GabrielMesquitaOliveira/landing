const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserModelSchema = new Schema({
  id: Schema.ObjectId,
  name: String,
  email: String,
  phone: String,
  insertionTime: Number,
});

const UserModel = mongoose.model("users", UserModelSchema);
module.exports = UserModel;
