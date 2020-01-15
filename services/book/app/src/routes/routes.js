let express = require("express");
let router = express.Router();

let gRPCRoutes = require('./grpcRoutes')



router.get("/", gRPCRoutes.home);

router.get("/api/v1/books",gRPCRoutes.getAllBook);


router.post("/api/v1/books", gRPCRoutes.createBook);

module.exports = router;
