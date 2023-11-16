import * as request from "../lib/requester";

const baseUrl = "http://localhost:3030/jsonstore/comments";

export const create = async (gameId, username, text) => {
  const newComment = await request.post(baseUrl, {
    id,
    username,
    text,
  });
  return newComment
};
