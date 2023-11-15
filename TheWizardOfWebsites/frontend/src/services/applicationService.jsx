import { request } from "../components/lib/requester";

const baseUrl = "http://localhost:3030/jsonstore/sites";

export const getAll = async () => {
  const result = await request("GET", baseUrl);
  console.log(result);
  return Object.values(result)
};

export const create = async (siteData) => {
  const response = await fetch(baseUrl, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(siteData),
  });
  const result = await response.json();
  return result;
};
