import * as request from "../lib/requester";

const baseUrl = "http://localhost:3030/data/comments";


export const getAll = async (id) => {
  const query = new URLSearchParams({
    where: `id="${id}"`,
    load: `owner=_ownerId:users`,
  });
  const result = await request.get(`${baseUrl}?${query}`)
  // return result.filter(comment => comment.id == id)
  return result
} 

export const create = async (id, username, text) => {
  const newComment = await request.post(baseUrl, {
    id,
    // username,
    text,
  });
  return newComment
};
// #1341
