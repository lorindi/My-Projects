export const pathToUrl = (path, params) => {
  const url = Object.keys(params).reduce((result, param) => {
    return result.replace(`:${param}`, params[param]);
  }, path);
  return url
};
