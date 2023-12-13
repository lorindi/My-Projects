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

export const getLatest = async () => {
  const query = new URLSearchParams({
    // sortBy: `_createdOn desc`,
    offset: 0,
    pageSize: 3,
  });
  const result = await request.get(`${baseUrl}?${query}`);
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

export const del = async (id) => request.del(`${baseUrl}/${id}`);
