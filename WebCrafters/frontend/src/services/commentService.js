import * as request from "../lib/requester";

const baseUrl = "http://localhost:3030/data/comments";


export const getAll = async (id) => {
  const query = new URLSearchParams({
    where: `id="${id}"`,
    load: `owner=_ownerId:users`,
  });
  const result = await request.get(`${baseUrl}?${query}`)
  return result
} 

export const create = async (id, text) => {
  const newComment = await request.post(baseUrl, {
    id,
    text,
  });
  return newComment
};

export const del = async (id) => {

  const token = localStorage.getItem("accessToken");
  const deletedComment = await fetch(`${baseUrl}/${id}`, {
      method: "DELETE",
      headers: {
          "Content-Type": "application/json",
          "X-Authorization": token,
      },
  });

  if (!deletedComment.ok) {
      const error = await deletedComment.json();
      throw new Error(`Error deleting comment: ${error.message}`);
  }

  return deletedComment.json();
};
