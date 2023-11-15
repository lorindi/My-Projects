export const request = async (method, url, data) => {
  const response = await fetch(url, {
    method,
  });
  const result = await response.json();
  return result;
};
