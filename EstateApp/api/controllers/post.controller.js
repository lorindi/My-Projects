import Post from "../models/Post";

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
    const posts = await Post.find(id).populate("ownerId", "name avatar");

    res.status(200).json();
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to get post" });
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
    const savedPost = newPost.save();

    res
      .status(200)
      .json({ message: "Post created successfully", post: savedPost });
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
      return res
        .status(404)
        .json({
          message: "Oops! We couldn't find the post you want to update.",
        });
    res.status(200).json(post);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to update post" });
  }
};
export const deletePosts = async (req, res) => {
    const { id } = req.params;
  try {
    const post = Post.findByIdAndDelete(id)
    res.status(200).json();
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to delete post" });
  }
};
