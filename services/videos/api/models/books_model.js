let mongoose = require("mongoose");
let Schema = mongoose.Schema;
let bluebird = require("bluebird");
mongoose.Promise = bluebird;

let BookSchema = new Schema({
  name: String,
  type: { type: String, default: "book" },
});


module.exports = mongoose.model("Book", BookSchema);
