import { Schema, model } from "mongoose";

export interface Blog {
  title: string;
  content: string;
  author: string;
  posted: Date;
}

const BlogSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  posted: {
    type: Date,
    default: Date.now,
  },
});

export const BlogModel = model("Blog", BlogSchema);
