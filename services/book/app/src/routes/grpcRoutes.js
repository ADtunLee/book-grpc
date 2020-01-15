let path = require("path");
let protoLoader = require("@grpc/proto-loader");
let grpc = require("grpc");
let bookProtoPath = path.join(__dirname, "..", "..", "protos", "book.proto");
let bookProtoDefinition = protoLoader.loadSync(bookProtoPath);
let bookPackageDefinition = grpc.loadPackageDefinition(bookProtoDefinition)
  .book;
let client = new bookPackageDefinition.BookService(
  "grpcserver:50051",
  grpc.credentials.createInsecure()
);

let home = async (req, res) => {
  let payload = { say:"book"}
  
  client.home(payload, (err, msg) => {
    console.log(payload);
    
    res.json(msg);
  });
};



module.exports = {
  home,
};
