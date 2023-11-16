import * as request from "../lib/requester";

const baseUrl = "http://localhost:3030/jsonstore/comments";


export const getAll = async () => {
  const result = await request.get(baseUrl)
  return Object.values(result)
} 

export const create = async (id, username, text) => {
  const newComment = await request.post(baseUrl, {
    id,
    username,
    text,
  });
  return newComment
};
