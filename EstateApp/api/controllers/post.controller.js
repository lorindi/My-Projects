import Post from "../models/Post.js";
import PostDetail from "../models/PostDetail.js";

export const getPosts = async (req, res) => {
  const query = req.query;


  try {
    const filter = {
      ...(query.city && { city: query.city }),
      ...(query.type && { type: query.type }),
      ...(query.property && { property: query.property }),
      ...(query.bedroom && { bedroom: parseInt(query.bedroom) }),
      ...(query.minPrice || query.maxPrice ? { 
        price: {
          ...(query.minPrice && { $gte: parseFloat(query.minPrice) }),
          ...(query.maxPrice && { $lte: parseFloat(query.maxPrice) })
        }
      } : {})
    };
    const posts = await Post.find(filter);
    res.status(200).json(posts);
  } catch (err) {
    console.error("Error fetching posts:", err);
    res.status(500).json({ message: "Failed to get posts" });
  }
};

export const getPost = async (req, res) => {
  const { id } = req.params;

  try {
    const post = await Post.findById(id).populate("ownerId postDetail", "email name avatar desc utilities pet income size school bus restaurant");

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
  const { postData, postDetail } = req.body;
  const userId = req.userId;

  try {
    const newPostDetail = await PostDetail.create(postDetail);

    const newPost = await Post.create({
      ...postData,
      ownerId: userId,
      postDetail: newPostDetail._id,
    });

    res.status(200).json(newPost);
  } catch (err) {
    console.error(err);
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
