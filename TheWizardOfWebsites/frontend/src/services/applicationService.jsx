import * as request  from "../components/lib/requester";

const baseUrl = "http://localhost:3030/jsonstore/sites";

export const getAll = async () => {
  const result = await request.get (baseUrl);
  console.log(result);
  return Object.values(result);
};

export const getOne = async (id) => {
  const result = await request.get(`${baseUrl}/${id}`)
  return result
}

export const create = async (siteData) => {
  const result = await request.post(baseUrl, siteData);
  return result;
};
