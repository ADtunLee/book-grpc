let path = require("path");
let mongoose = require("mongoose");
let { DB_URI } = require("../config/index");
let protoLoader = require("@grpc/proto-loader");
let grpc = require("grpc");
let bluebird = require("bluebird");

let Book = require("../models/books_model");
let bookProtoPath = path.join(__dirname, "..", "protos", "book.proto");
let bookProtoDefinition = protoLoader.loadSync(bookProtoPath);
let bookPackageDefinition = grpc.loadPackageDefinition(bookProtoDefinition)
  .book;

mongoose.Promise = bluebird;
mongoose.connect(DB_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true
});
let home = async (call, callback) => {
  
  callback(null, { msg: "videos" });
};

let createBook = async (call, callback) => {
  let book = call.request;
  let newBook = new Book({ name: book.name, category: book.categoryId });
  await newBook.save();
  console.log("saveBook");

  callback(null, { status: "success" });
};
let getAllBook = async (call, callback) => {
  let book = await Book.find({});
  callback(null, { book });
};

let main = async () => {
  let server = new grpc.Server();

  server.addService(bookPackageDefinition.BookService.service, {
    home: home,
    getAllBook: getAllBook,
    createBook: createBook 
  });
  // localhost
  server.bind("grpcserver:50051", grpc.ServerCredentials.createInsecure());
  server.start();
  console.log("gRPC server running at localhost:50051"); 
};
main();
