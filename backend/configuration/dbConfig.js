// const mongoose = require("mongoose");

// const connect = () => {
//   // mongoose.connect(process.env.MONGODB_URI);
//   mongoose.connect("mongodb://localhost:27017/users", {
//     serverSelectionTimeoutMS: 5000,
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true,
//   });

//   mongoose.connection.on("connected", () => {
//     console.log("Connected to mongoDB");
//   });

//   mongoose.connection.on("error", (err) => {
//     console.log("MongoDB Error: ", err);
//   });
// };

// module.exports = { connect };

const mongoose = require("mongoose");

const connect = () => {
  mongoose.connect(process.env.MONGODB_URI);

  mongoose.connection.on("connected", () => {
    console.log("Connected to mongoDB");
  });

  mongoose.connection.on("error", (err) => {
    console.log("MongoDB Error: ", err);
  });
};

module.exports = { connect };
