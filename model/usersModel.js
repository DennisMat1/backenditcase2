const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const autoIncrement = require("mongoose-auto-increment");

autoIncrement.initialize(mongoose);

const UsersSchema = new Schema({
  //id: Number,
  name: String,
  authId: String,
  image: String,
});
// test

//UsersSchema.plugin(autoIncrement.plugin, { model: "Users", field: "id" });
module.exports = Users = mongoose.model("Users", UsersSchema);
