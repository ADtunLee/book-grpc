let routes = require("./src/routes/routes");
// let { DB_URI } = require("./src/config");
// let mongoose = require("mongoose");
let express = require("express");
// let bluebird = require("bluebird");
let bodyParser = require('body-parser');

let app = express();

app.use(bodyParser.json());

// mongoose.Promise = bluebird;
// // mongoose.Promise = global.Promise;
// mongoose
//   .connect(DB_URI, { useMongoClient: true });
app.use('/',routes)
app.listen(3001, () => {
  console.log("running on port 3000");
  console.log("--------------------------");
});
