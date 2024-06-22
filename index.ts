import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import { connect } from "http2";
import cors from "cors";
import {
  createBlogController,
  deleteBlogController,
  editBlogController,
  getAllBlogsController,
  getBlogController,
} from "./Controllers/blogController";
dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(bodyParser());
app.use(cors());

//localhost:3001/
app.get("/blog", getBlogController);
app.get("/all-blog-posts", getAllBlogsController);
app.post("/create-blog", createBlogController);
app.delete("/delete-blog", deleteBlogController);
app.put("/update-blog", editBlogController);
mongoose
  .connect(process.env.MONGO_CONNECTION_STRING!)
  .then(() => {
    app.listen(port, () => {
      console.log(`App listening on port ${port}`);
    });
  })
  .catch((e) => {
    console.log("Connection Failed!!!");
  });
