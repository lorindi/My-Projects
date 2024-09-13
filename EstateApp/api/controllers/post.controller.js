import Post from "../models/Post.js";
import PostDetail from "../models/PostDetail.js";
import jwt from "jsonwebtoken";
import { JWT_SECRET_KEY } from "../constraints/constraints.js";
import SavedPost from "../models/SavedPost.js";
import mongoose from "mongoose";

export const getPosts = async (req, res) => {
  const query = req.query;

  try {
    const filter = {
      ...(query.city && { city: query.city }),
      ...(query.type && { type: query.type }),
      ...(query.property && { property: query.property }),
      ...(query.bedroom && { bedroom: parseInt(query.bedroom) }),
      ...(query.minPrice || query.maxPrice
        ? {
            price: {
              ...(query.minPrice && { $gte: parseFloat(query.minPrice) }),
              ...(query.maxPrice && { $lte: parseFloat(query.maxPrice) }),
            },
          }
        : {}),
    };
    const posts = await Post.find(filter);
    
    setTimeout(() => {
      res.status(200).json(posts);
    }, 500);
  } catch (err) {
    console.error("Error fetching posts:", err);
    res.status(500).json({ message: "Failed to get posts" });
  }
};



export const getPost = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid post ID format" });
  }

  try {
    // Find the post and populate related fields
    const post = await Post.findById(id).populate(
      "ownerId postDetail",
      "email name avatar desc utilities pet income size school bus restaurant"
    );

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    // Check if the request contains a token
    const token = req.cookies?.token;

    if (token) {
      jwt.verify(token, JWT_SECRET_KEY, async (err, payload) => {
        if (!err && payload) {
          // Check if the post is saved by the user
          const saved = await SavedPost.findOne({
            ownerId: payload.id,
            postId: id,
          });

          return res.status(200).json({ ...post.toObject(), isSaved: !!saved });
        }

        // If token verification fails, return the post with isSaved as false
        return res.status(200).json({ ...post.toObject(), isSaved: false });
      });
    } else {
      // If no token, return the post with isSaved as false
      return res.status(200).json({ ...post.toObject(), isSaved: false });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to get post" });
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

    res.status(200).json({ message: "Successfully created on post", newPost });
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

export const getFilteredPosts = async (req, res) => {
  const query = req.query;

  try {
    const filter = {
      ...(query.city && { city: query.city }),
      ...(query.type && { type: query.type }),
      ...(query.property && { property: query.property }),
      ...(query.bedroom && { bedroom: parseInt(query.bedroom) }),
      ...(query.minPrice || query.maxPrice
        ? {
            price: {
              ...(query.minPrice && { $gte: parseFloat(query.minPrice) }),
              ...(query.maxPrice && { $lte: parseFloat(query.maxPrice) }),
            },
          }
        : {}),
    };

    const limit = query.limit ? parseInt(query.limit) : 10;

    const posts = await Post.find(filter).limit(limit);

    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: "Failed to get posts", error: error.message });
  }
};
