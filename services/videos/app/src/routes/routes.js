let express = require("express");
let router = express.Router();

let gRPCRoutes = require('./grpcRoutes')



router.get("/", gRPCRoutes.home);


module.exports = router;
