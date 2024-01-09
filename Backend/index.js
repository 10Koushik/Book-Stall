import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { PORT, MongoDB_Url } from "./config.js";
import { Book } from "./models/bookModel.js";
import bookRoute from "./routes/booksRouter.js";

const app = express();

app.use(cors());

// app.use(
//   cors({
//     origin: "http://localhost:3000",
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     allowedHeaders: ["Content-Type"],
//   })
// )

// app.use(cors());
// Middleware to handle cors policy
app.use("/books", bookRoute); // Apply cors only to the "/books" route


// Middleware
app.use(express.json());


mongoose
  .connect(MongoDB_Url)
  .then(() => {
    console.log("This application is connected to the DB");
    app.listen(PORT, () => {
      console.log(`App is Running to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });


  

// import express, { request, response } from "express";
// import { PORT, MongoDB_Url } from "./config.js";
// import mongoose from "mongoose";
// import { Book } from "./models/bookModel.js";
// import bookRoute from "./routes/booksRouter.js";
// import cors from "cors";

// const app = express();

//Middleware
// app.use(express.json());

// Middleware to handle cors policy
// options 1: allow all origins with Default of cors(*)
// app.use(cors());
// options 2: Allow Custom origins
// app.use(
//   cors({
//     origin: "http://localhost:3000",
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     allowedHeaders: ["Content-Type"],
//   })
// );
// app.get("/", (request, response) => {
//   console.log(request);
//   return response.status(200).send("Hello Welcome");
// });

// app.use("/books", bookRoute);

// mongoose
//   .connect(MongoDB_Url)
//   .then(() => {
//     console.log("This application is connected to the DB");
//     app.listen(PORT, () => {
//       console.log(`App is Running to port: ${PORT}`);
//     });
//   })
//   .catch(() => {
//     console.log(error);
//   });
