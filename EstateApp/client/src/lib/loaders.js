import { useContext } from "react";
import apiRequest from "./apiRequest";
import { defer } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const singlePageLoader = async ({ request, params }) => {
  const res = await apiRequest("/posts/" + params.id);
  return res.data;
};

export const listPageLoader = async ({ request, params }) => {
  const query = request.url.split("?")[1];
  const postPromise = apiRequest("/posts?" + query);
  return defer({
    postResponse: postPromise,
  });
};

export const profilePageLoader = async () => {
  const { currentUser } = useContext(AuthContext);
  const postPromise = apiRequest(`/users/profilePosts/${currentUser._id}`);
  return defer({
    postResponse: postPromise,
  });
};




