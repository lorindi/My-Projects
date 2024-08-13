import Post from "../models/Post.js";

export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    if (!posts) return res.status(404).json({ message: "Posts not found" });
    res.status(200).json(posts);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to get posts" });
  }
};
export const getPost = async (req, res) => {
  const { id } = req.params;

  try {
    const post = await Post.findById(id).populate("ownerId", "name avatar");

    if (!post) {
      return res.status(404).json({ message: "Post not found." });
    }

    res.status(200).json(post);
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ message: "Failed to retrieve post. Please try again." });
  }
};
export const addPost = async (req, res) => {
  try {
    const {
      title,
      price,
      images,
      address,
      city,
      bedroom,
      bathroom,
      latitude,
      longitude,
      type,
      property,
      ownerId,
    } = req.body;

    const newPost = new Post({
      title,
      price,
      images,
      address,
      city,
      bedroom,
      bathroom,
      latitude,
      longitude,
      type,
      property,
      ownerId,
    });
    const savedPost = await newPost.save();

    res.status(200).json(savedPost);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to create post" });
  }
};
export const updatePost = async (req, res) => {
  const { id } = req.params;
  const newPost = req.body;
  try {
    const post = await Post.findByIdAndUpdate(id, newPost, { new: true });
    if (!post)
      return res.status(404).json({
        message: "The post you're trying to update couldn't be found.",
      });
    res.status(200).json({
      message: "Post updated successfully.",
      post,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to update post" });
  }
};
export const deletePosts = async (req, res) => {
  try {
    const { id } = req.params;

    const post = await Post.findByIdAndDelete(id);
    if (!post)
      return res.status(404).json({
        message: "The post you're trying to delete couldn't be found.",
      });
    res.status(200).json({
      message: "Post successfully deleted.",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to delete the post." });
  }
};
