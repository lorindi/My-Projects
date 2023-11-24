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
// #1341
