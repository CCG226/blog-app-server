import { BlogModel, Blog } from "../Schemas";

export const findAll = async () => {
  const blogs = await BlogModel.find({});
  return blogs;
};
export const find = async (id: string) => {
  const blog = await BlogModel.findById(id);
  return blog;
};
export const creator = async (blog: Blog) => {
  const item = await BlogModel.create(blog);
  return item;
};

export const deletor = async (id: string) => {
  const item = await BlogModel.findByIdAndDelete(id);
  return item;
};

export const editor = async (id: string, blog: Blog) => {
  const item = await BlogModel.findByIdAndUpdate(id, blog);
  const updatedBlog = await find(id);
  return updatedBlog;
};
