let mongoose = require("mongoose");
let Schema = mongoose.Schema;
let bluebird = require("bluebird");
mongoose.Promise = bluebird;

let CategorySchema = new Schema({
    title: String,
});


module.exports = mongoose.model("Category", CategorySchema);
