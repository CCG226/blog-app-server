import { Request, Response } from "express";
import { creator, deletor, editor, find, findAll } from "../Services/blogger";

export const getAllBlogsController = async (req: Request, res: Response) => {
  const allBlogs = await findAll();
  res.json(allBlogs);
};
export const getBlogController = async (req: Request, res: Response) => {
  const id: string = req.query.id as string;
  try {
    const blog = await find(id);
    res.json(blog);
  } catch (e) {
    console.log(e);
    return res.status(400).json("Bad Request::Invalid Blog Id");
  }
};
export const createBlogController = async (req: Request, res: Response) => {
  const data = req.body;
  try {
    const newBlog = await creator(data);
    res.json(newBlog);
  } catch (e) {
    console.log(e);
    return res.status(400).json("Bad Request::Invalid Blog Data");
  }
};
export const deleteBlogController = async (req: Request, res: Response) => {
  const id: string = req.query.id as string;
  try {
    const deletedBlog = await deletor(id);
    res.json(deletedBlog);
  } catch (e) {
    console.log(e);
    return res.status(400).json("Bad Request::Invalid Blog Id");
  }
};
export const editBlogController = async (req: Request, res: Response) => {
  try {
    const id: string = req.query.id as string;
    const editedBlog = await editor(id, req.body);
    res.json(editedBlog);
  } catch (e) {
    console.log(e);
    return res
      .status(400)
      .json("Bad Request::Invalid Blog Property Or Invalid Blod Id");
  }
};
