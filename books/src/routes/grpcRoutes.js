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
  let payload = {_id:req.body._id};
  client.home(payload, (err, book) => {
    console.log(payload);
    
    res.json(book)
  });
};

let getAllBook = (req, res) => {
  client.getAllBook({}, (err, books) => {
    res.json(books);
  });
};

let createBook = (req, res) => {
  console.log(req.body);

  let payload = { name: req.body.name, typeId: req.body.categoryId };
  client.createBook(payload, (err, result) => {
    console.log("created");
    res.json(result);
  });
};



module.exports = {
  home,
  getAllBook,
  createBook,
};