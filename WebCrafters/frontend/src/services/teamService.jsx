import * as request from "../lib/requester";

const baseUrl = "http://localhost:3030/data/team";

export const getAll = async () => {
  const result = await request.get(baseUrl);
  return result;
};

export const getOne = async (id) => {
  const result = await request.get(`${baseUrl}/${id}`);
  return result;
};


export const create = async (teamData) => {
  const result = await request.post(baseUrl, teamData);
  return result;
};
export const edit = async (id, teamData) => {
  const result = await request.put(`${baseUrl}/${id}`, teamData);
  return result;
};

export const del = async (id) => request.del(`${baseUrl}/${id}`);
