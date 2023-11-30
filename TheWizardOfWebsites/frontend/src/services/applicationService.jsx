import * as request from "../lib/requester";

const baseUrl = "http://localhost:3030/data/sites";

export const getAll = async () => {
  const result = await request.get(baseUrl);
  return result;
};

export const getOne = async (id) => {
  const result = await request.get(`${baseUrl}/${id}`);
  return result;
};

export const create = async (siteData) => {
  const result = await request.post(baseUrl, siteData);
  return result;
};
export const edit = async (id, siteData) => {
  const result = await request.put(`${baseUrl}/${id}`, siteData);
  return result;
};