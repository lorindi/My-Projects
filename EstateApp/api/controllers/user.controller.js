import SavedPost from "../models/SavedPost.js";
import User from "../models/User.js";
import bcrypt from "bcrypt";
import Post from "../models/Post.js"
// export const getUser = async (req, res) => {
//   const {id} = req.params.id
//   try {
//     const users = await User.find(id);
//     res.status(200).json(users);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ message: "Failed to get users!" });
//   }
// };

export const getUsers = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.findOne({ id });
    res.status(200).json(user);
    if (!user) return res.status(404).json({ message: "User not found" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Fail to get users!" });
  }
};


export const updateUser = async (req, res) => {
  const id = req.params.id;
  const tokenUserId = req.userId;
  const { password, avatar, ...inputs } = req.body;

  if (id !== tokenUserId) {
    return res.status(403).json({ message: "Not Authorized!" });
  }

  try {
    if (password) {
      const hashedPassword = await bcrypt.hash(password, 10);
      inputs.password = hashedPassword;
    }

    const updatedUser = await User.findByIdAndUpdate(id, { ...inputs, avatar }, { new: true });

    const { password: userPassword, ...rest } = updatedUser._doc;

    res.status(200).json(rest);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to update user!" });
  }
};


export const deleteUser = async (req, res) => {
  const id = req.params.id;
  const tokenUserId = req.userId;
  if (id !== tokenUserId) {
    return res.status(403).json({ message: "Not Authorized" });
  }
  try {
    await User.findByIdAndDelete({id});
    res.status(200).json({message: "User deleted"});
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Fail to delete user!" });
  }
};
export const savePost = async (req, res) => {
  try {
    const userId = req.userId; 
    const { postId } = req.body;

    // Check if the post exists
    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    // Check if the post is already saved by the user
    const alreadySaved = await SavedPost.findOne({ ownerId: userId, postId });
    if (alreadySaved) {
      await SavedPost.findByIdAndDelete(alreadySaved._id);
      await User.findByIdAndUpdate(userId, { $pull: { savedPosts: alreadySaved._id } });
      return res.status(200).json({ message: "Post removed from saved posts" });
    }

    // Save the post to the user's saved posts
    const newSavedPost = new SavedPost({
      ownerId: userId,
      postId: postId,
    });

    const savedPost = await newSavedPost.save();

    // Update the user's savedPosts field
    await User.findByIdAndUpdate(userId, { $push: { savedPosts: savedPost._id } });

    return res.status(201).json({ message: "Post saved successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "An error occurred while saving the post" });
  }
};


export const profilePosts = async (req, res) => {
  try {
    const tokenUserId = req.userId;

    // Fetch user posts (posts created by the user)
    const userPosts = await Post.find({ ownerId: tokenUserId });

    // Fetch saved posts (posts saved by the user)
    const savedPostsData = await SavedPost.find({ ownerId: tokenUserId }).populate("postId");
    
    // Extract the post details from the populated data
    const savedPosts = savedPostsData.map(savedPost => savedPost.postId);

    // Send response with both user posts and saved posts
    res.status(200).json({ userPosts, savedPosts });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "An error occurred while fetching posts." });
  }
};